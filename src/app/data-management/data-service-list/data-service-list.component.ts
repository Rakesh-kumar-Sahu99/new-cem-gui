import { Component, OnInit } from '@angular/core';
import { DMService } from '../dm.service';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-data-service-list',
  templateUrl: './data-service-list.component.html',
  styleUrl: './data-service-list.component.css'
})
export class DataServiceListComponent implements OnInit{

  public databases:any;
  public tabelData:any;
  public columns:ColDef[] =[
    {field:"columnName"},
    {field:"dataType"}
  ]

  public tableConfiguration: ColDef = {
    flex: 1,
    minWidth: 150,
    filter: true,
    autoHeight: true
  };

  constructor(private dmService:DMService){
    this.getDataBases();
  }
  ngOnInit(): void {
    
  }
  
  getDataBases(){
    this.databases = this.dmService.getDatabases().subscribe(
      (resp:any)=>{
        this.databases = resp;
        // console.log(this.databases);
      }
    );
    
  }

}
