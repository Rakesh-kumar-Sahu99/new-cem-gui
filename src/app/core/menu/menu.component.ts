import { Component } from '@angular/core';
import { CoreService } from '../core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  public data: any;
  public sectorLabel: any;
  public sub:any;
  public subModules: any;
  public link : any;
  constructor(private coreService: CoreService,private router: Router) {
    this.getData();
  }

  getData() {
    this.data = this.coreService.getMenuConfig();
    this.sectorLabel = Object.keys(this.data);
    this.subModules = this.data[this.sectorLabel].subModules;
    
  }

  onSelectResource(event: any) {
    const selectedUrl = event.target.value;
    this.router.navigateByUrl(selectedUrl);
  }

}
