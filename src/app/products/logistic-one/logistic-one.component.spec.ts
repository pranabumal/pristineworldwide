import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticOneComponent } from './logistic-one.component';

describe('LogisticOneComponent', () => {
  let component: LogisticOneComponent;
  let fixture: ComponentFixture<LogisticOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogisticOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
