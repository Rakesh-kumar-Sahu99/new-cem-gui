import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DMService } from '../dm.service';
import { ColDef } from 'ag-grid-community';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-data-service-list',
  templateUrl: './data-service-list.component.html',
  styleUrl: './data-service-list.component.css'
})
export class DataServiceListComponent implements OnInit {

  public selectTabs: any;
  public databases: any = [];
  public selectedDatabase: any;
  public entityName: any = [];
  public columnsNames: any = [];
  public tableData: any = [];
  public columns: ColDef[] = [
    { field: "columnName" },
    { field: "columnDataType" }
  ]

  public tableConfiguration: ColDef = {
    flex: 1,
    minWidth: 150,
    filter: true,
    autoHeight: true
  };

  constructor(private dmService: DMService, private formBuilder: FormBuilder, private cdRef: ChangeDetectorRef) {
    this.getDataBases();
    this.selectTabs = this.formBuilder.group({
      db: [''],
      entity: [''],
      column: ['']
    })
  }
  ngOnInit(): void {
   
  }

  onDbCheckBoxChenge(event: any) {
    this.selectedDatabase = event.source.value;
    this.dmService.getEntityName(event.source.value).subscribe(
      (entities: any) => {
        this.entityName = entities.data;
      }
    );
  }

  onEntityCheckBoxChenge(event: any) {
    this.dmService.getColumns(this.selectedDatabase, event.source.value).subscribe(
      (columns: any) => {
        this.columnsNames = columns.data;
      }
    )
  }

  onColumnSelect(event: any) {
    if (event.checked == true) {
      if (!this.tableData.includes(event.source.value)) {
        this.tableData = [...this.tableData, event.source.value];
      }
    } else {
      this.tableData = this.tableData.filter((value: any) => value !== event.source.value);
    }
    console.log(this.tableData);
    // console.log(this.selectTabs.value);
    this.cdRef.detectChanges();

  }

  getDataBases() {
    this.dmService.getDatabases().subscribe(
      (resp: any) => {
        this.databases = resp.data;
        // console.log(this.databases);
      }
    );

  }

}
