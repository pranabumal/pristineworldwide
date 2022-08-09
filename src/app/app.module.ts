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
import {NzAffixModule} from "ng-zorro-antd/affix";
import {NzGridModule} from "ng-zorro-antd/grid";
import {CarouselModule} from "ngx-owl-carousel-o";
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AwardsComponent } from './company/awards/awards.component';
import { SuccessStoriesComponent } from './company/success-stories/success-stories.component';
import { ResourcesComponent } from './company/resources/resources.component';
import { PartnershipsComponent } from './company/partnerships/partnerships.component';
import {NzCarouselModule} from "ng-zorro-antd/carousel";
import {IotComponent} from "./technology/iot/iot.component";
import {MachineLearningComponent} from "./technology/machine-learning/machine-learning.component";
import {BlockChainComponent} from "./technology/block-chain/block-chain.component";
import {ProjectManagementComponent} from "./services/project-management/project-management.component";
import {ServiceTrainingComponent} from "./services/service-training/service-training.component";
import {ConsultingComponent} from "./services/consulting/consulting.component";
import {IndustryComponent} from "./industry/industry.component";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzImageModule} from "ng-zorro-antd/image";
import {CareersComponent} from "./career/careers/careers.component";
import {WebinarsComponent} from "./webinars/webinars.component";
import {WhitePapersComponent} from "./white-papers/white-papers.component";
import {PrivcyPolicyComponent} from "./privacy-policy/privcy-policy.component";
import {TransformSalesForceComponent} from "./white-papers/transform-sales-force/transform-sales-force.component";
import {
    IntelligentTechnologyFarmingComponent
} from "./white-papers/intelligent-technology-farming/intelligent-technology-farming.component";
import {PristineSfaComponent} from "./white-papers/pristine-sfa/pristine-sfa.component";
import {WebinarAzureComponent} from "./webinars/webinar-azure/webinar-azure.component";
import {BigDataComponent} from "./technology/big-data/big-data.component";
import {RpaComponent} from "./technology/rpa/rpa.component";
import {BusinessIntelligentComponent} from "./technology/business-intelligent/business-intelligent.component";

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
        PartnershipsComponent,
        IotComponent,
        MachineLearningComponent,
        BlockChainComponent,
        ProjectManagementComponent,
        ServiceTrainingComponent,
        ConsultingComponent,
        IndustryComponent,
        CareersComponent,
        WebinarsComponent,
        WhitePapersComponent,
        PrivcyPolicyComponent,
        TransformSalesForceComponent,
        IntelligentTechnologyFarmingComponent,
        PristineSfaComponent,
        WebinarAzureComponent,
        BigDataComponent,
        RpaComponent,
        BusinessIntelligentComponent
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
        NzGridModule,
        NzCarouselModule,
        NzModalModule,
        NzImageModule
    ],
    providers: [{ provide: NZ_I18N, useValue: en_US }],
    bootstrap: [AppComponent]
})
export class AppModule { }
