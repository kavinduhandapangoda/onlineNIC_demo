import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrtDashboardComponent } from './drt-dashboard.component';

describe('DrtDashboardComponent', () => {
  let component: DrtDashboardComponent;
  let fixture: ComponentFixture<DrtDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrtDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrtDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
