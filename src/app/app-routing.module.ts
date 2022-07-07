import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SapBusinessoneComponent} from "./company/products/sap-businessone/sap-businessone.component";
import {SapBusinessBydesignComponent} from "./company/products/sap-business-bydesign/sap-business-bydesign.component";
import {SapHanaComponent} from "./company/products/sap-hana/sap-hana.component";
import {SapCustomerCheckoutComponent} from "./company/products/sap-customer-checkout/sap-customer-checkout.component";
import {FocusPointComponent} from "./company/products/eCommerce/focus-point/focus-point.component";
import {BigcommerceComponent} from "./company/products/eCommerce/bigcommerce/bigcommerce.component";
import {SfaComponent} from "./company/products/sfa/sfa.component";
import {SapApparelComponent} from "./company/products/sap-apparel/sap-apparel.component";
import {AgriOneComponent} from "./company/products/agri-one/agri-one.component";
import {TeaOneComponent} from "./company/products/tea-one/tea-one.component";
import {LogisticOneComponent} from "./company/products/logistic-one/logistic-one.component";
import {HrisComponent} from "./company/products/hris/hris.component";
import {HomeComponent} from "./home/home.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {AwardsComponent} from "./company/awards/awards.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {SuccessStoriesComponent} from "./company/success-stories/success-stories.component";
import {ResourcesComponent} from "./company/resources/resources.component";
import {PartnershipsComponent} from "./company/partnerships/partnerships.component";

const routes: Routes = [

    {path: '', component: HomeComponent},
    {path: 'sap-businessone', component: SapBusinessoneComponent},
    {path: 'sap-business-bydesign', component: SapBusinessBydesignComponent},
    {path: 'sap-hana', component: SapHanaComponent},
    {path: 'sap-customer-checkout', component: SapCustomerCheckoutComponent},
    {path: 'focus-point', component: FocusPointComponent},
    {path: 'bigcommerce', component: BigcommerceComponent},
    {path: 'sfa', component: SfaComponent},
    {path: 'sap-apparel', component: SapApparelComponent},
    {path: 'agri-one', component: AgriOneComponent},
    {path: 'tea-one', component: TeaOneComponent},
    {path: 'logistic-one', component: LogisticOneComponent},
    {path: 'hris', component: HrisComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'awards', component: AwardsComponent},
    {path: 'success-stories', component: SuccessStoriesComponent},
    {path: 'resources', component: ResourcesComponent},
    {path: 'partnerships', component: PartnershipsComponent},
    {path: 'contact-us', component: ContactUsComponent},
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled', paramsInheritanceStrategy: 'always'})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
