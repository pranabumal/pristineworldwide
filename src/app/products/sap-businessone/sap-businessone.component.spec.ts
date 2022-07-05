import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapBusinessoneComponent } from './sap-businessone.component';

describe('SapBusinessoneComponent', () => {
  let component: SapBusinessoneComponent;
  let fixture: ComponentFixture<SapBusinessoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SapBusinessoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SapBusinessoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
