import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapCustomerCheckoutComponent } from './sap-customer-checkout.component';

describe('SapCustomerCheckoutComponent', () => {
  let component: SapCustomerCheckoutComponent;
  let fixture: ComponentFixture<SapCustomerCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SapCustomerCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SapCustomerCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
