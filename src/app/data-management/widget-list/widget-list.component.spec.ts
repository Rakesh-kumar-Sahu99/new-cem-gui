import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetListComponent } from './widget-list.component';

describe('WidgetListComponent', () => {
  let component: WidgetListComponent;
  let fixture: ComponentFixture<WidgetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidgetListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WidgetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
