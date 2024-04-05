import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataSourceFormComponent } from '../data-source-form/data-source-form.component';
import { ColDef } from 'ag-grid-community';
import { DMService } from '../dm.service';
import { ButtonComponent } from '../../core/button/button.component';

@Component({
  selector: 'app-data-source-list',
  templateUrl: './data-source-list.component.html',
  styleUrl: './data-source-list.component.css'
})
export class DataSourceListComponent {

  title = "Data Source List";
  public data: any = [];
  public colDefs: ColDef[] = [
    // { field: "altKey" },
    { field: "dbType" },
    { field: "dbName" },
    { field: "host" },
    { field: "userName" },
    { field: "password" },
    {
      field: "Action",
      cellRenderer: ButtonComponent
    }
    // { field: "createdDate" },
    // { field: "modifiedDate" }
  ];

  public tableConfiguration: ColDef = {
    flex: 1,
    minWidth: 150,
    filter: true,
    autoHeight: true
  };
  // public displayForm:boolean=false;
  constructor(private dialog: MatDialog, private dmService: DMService) {
    this.getListData();

  }

  getListData() {
    this.dmService.getDataSource().subscribe(
      (resp: any) => {
        this.data = resp.data;
      }
    )
  }

  openDialogForm(eventdata:any){

    // console.log(eventdata.data);
    if(eventdata!= undefined){
      let actionType = eventdata.event.target.innerHTML;
      if(actionType != undefined && actionType == 'EDIT' || actionType == 'VIEW'){
        const dialogRef = this.dialog.open(DataSourceFormComponent,
          {
            data : {'formdata':eventdata.data,'actionType':actionType},
            height :'400px',
            width:'600px'

          });
      }
    }
  }



  openDataSourceForm(eventData:any) {
    // this.displayForm=true;
    let actionType = eventData.target.innerHTML;
    let dialogRef = this.dialog.open(DataSourceFormComponent, {
      data:{'actionType':actionType},
      height: '400px',
      width: '600px',
    });
  }
}
