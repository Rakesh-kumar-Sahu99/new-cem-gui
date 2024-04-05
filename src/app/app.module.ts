import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DataManagementModule } from './data-management/data-management.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {
    path:"dm",
    loadChildren:()=> import('./data-management/data-management.module').then(r=>DataManagementModule)
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    // DataManagementModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
