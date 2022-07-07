import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { SapBusinessoneComponent } from './company/products/sap-businessone/sap-businessone.component';
import { SapBusinessBydesignComponent } from './company/products/sap-business-bydesign/sap-business-bydesign.component';
import { SapHanaComponent } from './company/products/sap-hana/sap-hana.component';
import { SapCustomerCheckoutComponent } from './company/products/sap-customer-checkout/sap-customer-checkout.component';
import { FocusPointComponent } from './company/products/eCommerce/focus-point/focus-point.component';
import { BigcommerceComponent } from './company/products/eCommerce/bigcommerce/bigcommerce.component';
import { SfaComponent } from './company/products/sfa/sfa.component';
import { SapApparelComponent } from './company/products/sap-apparel/sap-apparel.component';
import { AgriOneComponent } from './company/products/agri-one/agri-one.component';
import { TeaOneComponent } from './company/products/tea-one/tea-one.component';
import { LogisticOneComponent } from './company/products/logistic-one/logistic-one.component';
import { HrisComponent } from './company/products/hris/hris.component';
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
import {NzAffixModule} from "ng-zorro-antd/affix";
import {NzGridModule} from "ng-zorro-antd/grid";
import {CarouselModule} from "ngx-owl-carousel-o";
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AwardsComponent } from './company/awards/awards.component';
import { SuccessStoriesComponent } from './company/success-stories/success-stories.component';
import { ResourcesComponent } from './company/resources/resources.component';
import { PartnershipsComponent } from './company/partnerships/partnerships.component';

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
      HomeComponent,
      ContactUsComponent,
      AboutUsComponent,
      AwardsComponent,
      SuccessStoriesComponent,
      ResourcesComponent,
      PartnershipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      CarouselModule,
      NzDropDownModule,
      NzIconModule,
      NzAffixModule,
      NzGridModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
