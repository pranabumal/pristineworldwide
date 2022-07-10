import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusPointComponent } from './focus-point.component';

describe('FocusPointComponent', () => {
  let component: FocusPointComponent;
  let fixture: ComponentFixture<FocusPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocusPointComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FocusPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
