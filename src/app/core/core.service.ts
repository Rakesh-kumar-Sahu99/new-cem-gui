import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { menuConfig } from './menu-config';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor() {
    this.getMenuConfig();
   }

  getMenuConfig(){
    var menuData = menuConfig.data;
    return menuData;
  }
}
