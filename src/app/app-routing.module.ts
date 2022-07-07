import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {SapBusinessoneComponent} from "./products/sap-businessone/sap-businessone.component";
import {SapBusinessBydesignComponent} from "./products/sap-business-bydesign/sap-business-bydesign.component";
import {SapHanaComponent} from "./products/sap-hana/sap-hana.component";
import {SapCustomerCheckoutComponent} from "./products/sap-customer-checkout/sap-customer-checkout.component";
import {FocusPointComponent} from "./products/eCommerce/focus-point/focus-point.component";
import {BigcommerceComponent} from "./products/eCommerce/bigcommerce/bigcommerce.component";
import {SfaComponent} from "./products/sfa/sfa.component";
import {SapApparelComponent} from "./products/sap-apparel/sap-apparel.component";
import {AgriOneComponent} from "./products/agri-one/agri-one.component";
import {TeaOneComponent} from "./products/tea-one/tea-one.component";
import {LogisticOneComponent} from "./products/logistic-one/logistic-one.component";
import {HrisComponent} from "./products/hris/hris.component";
import {LayoutComponent} from "./layout/layout.component";
import {HomeComponent} from "./home/home.component";

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
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled', paramsInheritanceStrategy: 'always'})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
