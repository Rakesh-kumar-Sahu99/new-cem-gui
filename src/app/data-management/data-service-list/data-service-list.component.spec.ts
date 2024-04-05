import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataServiceListComponent } from './data-service-list.component';

describe('DataServiceListComponent', () => {
  let component: DataServiceListComponent;
  let fixture: ComponentFixture<DataServiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataServiceListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
