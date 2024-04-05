import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent implements OnInit{
  constructor(){

  }
  ngOnInit(): void {
    
  }

  @Input() public tableData:any;
  @Input() public columns:any;
  @Input() public config:any;
  @Output() public personData = new EventEmitter<any>();

  onClick(data:any){
    this.personData.emit(data);
  }

}
