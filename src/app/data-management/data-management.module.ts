import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSourceListComponent } from './data-source-list/data-source-list.component';
import { DataSourceFormComponent } from './data-source-form/data-source-form.component';
import { CoreModule } from '../core/core.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatLabel } from '@angular/material/form-field';
import { MatFormFieldControl } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DataServiceFormComponent } from './data-service-form/data-service-form.component';
import { DataServiceListComponent } from './data-service-list/data-service-list.component';
import {MatStepperModule} from '@angular/material/stepper';
import {  MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule, Routes } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';


const routes:Routes=[
  {
    path:"dataService",
    component:DataServiceListComponent
  },
  {
    path:"dataSource",
    component:DataSourceListComponent
  }
]


@NgModule({
  declarations: [
    DataSourceListComponent,
    DataSourceFormComponent,
    DataServiceFormComponent,
    DataServiceListComponent
  ],
  exports:[
    DataSourceListComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatLabel,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatStepperModule,
    MatSnackBarModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatCheckboxModule
  ]
})
export class DataManagementModule { }
