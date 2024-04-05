import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent implements OnInit{

  public apiData: any;
  public iconLogoClassName:any;

  constructor(private coreService:CoreService){
    
  }
  ngOnInit(): void {
  
  }

}
