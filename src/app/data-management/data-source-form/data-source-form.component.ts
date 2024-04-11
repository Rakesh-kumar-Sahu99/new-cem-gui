import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DMService } from '../dm.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-data-source-form',
  templateUrl: './data-source-form.component.html',
  styleUrl: './data-source-form.component.css'
})
export class DataSourceFormComponent implements OnInit {
  public userForm: any;
  public dbBase = ['MySQL', 'Oracle', 'PostgreSQL', 'MongoDB', 'SQLite', 'SQL Server'];
  public actionType: any;
  constructor(private formBuilder: FormBuilder,
    private dialog: MatDialogRef<DataSourceFormComponent>,
    private dmService: DMService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) {

  }
  
  ngOnInit(): void {
    this.actionType = this.data.actionType;
    if (this.data != undefined) {
      this.actionType = this.data.actionType;
      console.log(this.actionType);
      if (this.actionType = 'CREATE') {
        this.userForm = this.formBuilder.group({
          dbType: this.formBuilder.control('', [Validators.required]),
          host: this.formBuilder.control('', [Validators.required]),
          dbName: ['', [Validators.required]],
          userName: ['', [Validators.required]],
          password: ['', [Validators.required]]
        })
      } 
      if (this.actionType = 'VIEW') {
        this.userForm = this.formBuilder.group({
          dbType: [{ value: this.data.formdata.dbType, disabled: this.actionType === 'VIEW' }],
          host: [{ value: this.data.formdata.host, disabled: this.actionType === 'VIEW' }],
          dbName: [{ value: this.data.formdata.dbName, disabled: this.actionType === 'VIEW' }],
          userName: [{ value: this.data.formdata.userName, disabled: this.actionType === 'VIEW' }],
          password: [{ value: this.data.formdata.password, disabled: this.actionType === 'VIEW' }]
        })
      } 
      if(this.actionType = 'EDIT'){
        this.userForm = this.formBuilder.group({
          dbType: [this.data.formdata.dbType],
          host: [this.data.formdata.host],
          dbName: [this.data.formdata.dbName],
          userName: [this.data.formdata.userName],
          password: [this.data.formdata.password]
        })
      }
    }

  }
  getFormControl(controlName: any) {
    return this.userForm['controls'][controlName];
  }

  onSave() {
    // console.log(this.userForm);
    // console.log(this.userForm.value);
    // this.dialog.close();
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      this.dmService.saveDataSource(formData).subscribe(
        response => {
          if (response.status === 'SUCCESS') {
            this.snackBar.open('Data saved successfully', 'Close', {
              duration: 3000,
            });

          } else {
            this.snackBar.open('Failed to save data', 'Close', {
              duration: 3000,
            });
          }
          this.dialog.close();
        },
        error => {
          console.error('Error occurred while saving data:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }

  }

  closeForm() {
    this.dialog.close();

  }


}
