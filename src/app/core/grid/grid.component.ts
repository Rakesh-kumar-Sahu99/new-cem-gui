import { Component, EventEmitter, Input, OnInit, Output ,ChangeDetectorRef } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent implements OnInit{
  constructor(private cdRef:ChangeDetectorRef){

  }
  ngOnInit(): void {
    
  }
  ngOnChanges(): void {
    // Manually trigger change detection when inputs change
    this.cdRef.detectChanges();
  }

  @Input() public tableData:any;
  @Input() public columns:any;
  @Input() public config:any;
  @Output() public personData = new EventEmitter<any>();

  onClick(data:any){
    this.personData.emit(data);
  }

}
