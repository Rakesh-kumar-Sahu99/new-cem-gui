import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements ICellRendererAngularComp{
  agInit(params: ICellRendererParams<any, any, any>): void {
    
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true;
  }

}
