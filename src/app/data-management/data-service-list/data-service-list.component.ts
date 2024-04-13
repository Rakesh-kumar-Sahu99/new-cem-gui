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
  public selectMenu: any;
  public detailsForm:any;
  public databases: any = [];
  public selectedDatabase: any;
  public selectedEntity:any;
  public entityName: any = [];
  public columnsNames: any = [];
  public tableData: any = [];
  public leftExpression : any = [];
  public rightExpression : any = [];
  public leftEntitySelected:any;
  public rightEntitySelected:any;
  public joinFilterData : any =[];
  public joinValue : any =["Inner Join","Left Join","Right Join","Full Join","Cross Join"]
  public columns: ColDef[] = [
    { field: "columnName" },
    { field: "columnDataType" }
  ]
  public joinFilterConfiguration: ColDef = {
    flex: 1,
    minWidth: 150,
    filter: true,
    autoHeight: true
  };
  public joinFilterColDefs: ColDef[] = [
    { field: "leftEntity" },
    { field: "leftexpression" },
    { field: "join" },
    { field: "operator"},
    { field: "rightexpression" },
    { field: "rightEntity" }
  ];

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

    this.selectMenu = this.formBuilder.group({
      leftEntity:[''],
      rightEntity:[''],
      rightexpression:[''],
      leftexpression:[''],
      join:[''],
      operator:['']
    })

    this.detailsForm = this.formBuilder.group({
      dataServiceName:[''],
      description:['']
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
    this.selectedEntity = event.source.value;
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
    // console.log(this.tableData);
    // console.log(this.selectTabs);
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

  leftSelectionChange(event:any){
    this.dmService.getColumns(this.selectedDatabase, event.source.value).subscribe(
      (columns: any) => {
        this.leftExpression = columns.data;
      }
    )
    // if (this.selectMenu.controls.leftEntity.value !== null) {
    //   console.log(this.selectMenu.controls.leftEntity.value);
    // } else {
    //   console.log("Value not set");
    // }
    
    // console.log(this.selectMenu.value);

  }
  rightSelectionChange(event:any){
    this.dmService.getColumns(this.selectedDatabase, event.source.value).subscribe(
      (columns: any) => {
        this.rightExpression = columns.data;
      }
    )

  }

  viewControls(){
    // console.log(this.selectMenu.value);
    if(!this.joinFilterData.includes(this.selectMenu.value)){
      this.joinFilterData = [...this.joinFilterData, this.selectMenu.value];
    }
    this.cdRef.detectChanges();
  }

  constructJson(){
    const jsonStructure = {
      "entity name": this.selectedEntity,
      "columns": this.tableData,
      "joincriteria": this.selectMenu.value,
      "data service name": this.detailsForm.value.dataServiceName,
      "description": this.detailsForm.value.description
    };
    console.log(this.detailsForm);
    console.log(jsonStructure);
  }


}
