import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MenuComponent } from './menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './grid/grid.component';
import { AgGridAngular } from 'ag-grid-angular';
import { DataServiceListComponent } from '../data-management/data-service-list/data-service-list.component';
import { DataSourceListComponent } from '../data-management/data-source-list/data-source-list.component';
import { DataServiceFormComponent } from '../data-management/data-service-form/data-service-form.component';
import { ButtonComponent } from './button/button.component';
import {MatButtonModule} from '@angular/material/button';

// const routes: Routes = [
//   { path: 'dataSource', component: DataSourceListComponent },
//   // { path: 'dataService', component: DataServiceListComponent },
//   { path: 'dataService', component: DataServiceListComponent },
//   { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect to dataService by default
// ];

@NgModule({
  declarations: [
    TopBarComponent,
    MenuComponent,
    GridComponent,
    ButtonComponent
  ],
  exports:[
    MenuComponent,
    TopBarComponent,
    GridComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatSelectModule,
    AgGridAngular,
    RouterModule,
    MatButtonModule
  ]
})
export class CoreModule { }
