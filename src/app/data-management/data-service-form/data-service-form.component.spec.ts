import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataServiceFormComponent } from './data-service-form.component';

describe('DataServiceFormComponent', () => {
  let component: DataServiceFormComponent;
  let fixture: ComponentFixture<DataServiceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataServiceFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
