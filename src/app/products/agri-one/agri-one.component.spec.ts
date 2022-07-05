import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriOneComponent } from './agri-one.component';

describe('AgriOneComponent', () => {
  let component: AgriOneComponent;
  let fixture: ComponentFixture<AgriOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgriOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgriOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
