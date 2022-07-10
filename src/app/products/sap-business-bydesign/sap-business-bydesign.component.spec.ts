import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapBusinessBydesignComponent } from './sap-business-bydesign.component';

describe('SapBusinessBydesignComponent', () => {
  let component: SapBusinessBydesignComponent;
  let fixture: ComponentFixture<SapBusinessBydesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SapBusinessBydesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SapBusinessBydesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
