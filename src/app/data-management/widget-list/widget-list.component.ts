import { Component } from '@angular/core';
import { WidgetFormComponent } from '../widget-form/widget-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrl: './widget-list.component.css'
})
export class WidgetListComponent {

  constructor(private dialog: MatDialog){

  }

  openWidgetForm(){
    // console.log(this.dialog)
    let dialogRef = this.dialog.open(WidgetFormComponent, {
      // data:{'actionType':actionType},
      height: '600px',
      width: '2500px',
    });
  }

}
