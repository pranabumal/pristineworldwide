import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { SapBusinessoneComponent } from './products/sap-businessone/sap-businessone.component';
import { SapBusinessBydesignComponent } from './products/sap-business-bydesign/sap-business-bydesign.component';
import { SapHanaComponent } from './products/sap-hana/sap-hana.component';
import { SapCustomerCheckoutComponent } from './products/sap-customer-checkout/sap-customer-checkout.component';
import { FocusPointComponent } from './products/eCommerce/focus-point/focus-point.component';
import { BigcommerceComponent } from './products/eCommerce/bigcommerce/bigcommerce.component';
import { SfaComponent } from './products/sfa/sfa.component';
import { SapApparelComponent } from './products/sap-apparel/sap-apparel.component';
import { AgriOneComponent } from './products/agri-one/agri-one.component';
import { TeaOneComponent } from './products/tea-one/tea-one.component';
import { LogisticOneComponent } from './products/logistic-one/logistic-one.component';
import { HrisComponent } from './products/hris/hris.component';
import { HeaderComponent } from './header-footer/header/header.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import {LayoutComponent} from "./layout/layout.component";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NzIconModule} from "ng-zorro-antd/icon";
import {HomeComponent} from "./home/home.component";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    SapBusinessoneComponent,
    SapBusinessBydesignComponent,
    SapHanaComponent,
    SapCustomerCheckoutComponent,
    FocusPointComponent,
    BigcommerceComponent,
    SfaComponent,
    SapApparelComponent,
    AgriOneComponent,
    TeaOneComponent,
    LogisticOneComponent,
    HrisComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
      HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      NzDropDownModule,
      NzIconModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
