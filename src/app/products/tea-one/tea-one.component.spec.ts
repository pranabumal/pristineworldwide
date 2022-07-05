import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaOneComponent } from './tea-one.component';

describe('TeaOneComponent', () => {
  let component: TeaOneComponent;
  let fixture: ComponentFixture<TeaOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeaOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeaOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
