import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapApparelComponent } from './sap-apparel.component';

describe('SapApparelComponent', () => {
  let component: SapApparelComponent;
  let fixture: ComponentFixture<SapApparelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SapApparelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SapApparelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
