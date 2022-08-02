import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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
import {HomeComponent} from "./home/home.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";
import {AwardsComponent} from "./company/awards/awards.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {SuccessStoriesComponent} from "./company/success-stories/success-stories.component";
import {ResourcesComponent} from "./company/resources/resources.component";
import {PartnershipsComponent} from "./company/partnerships/partnerships.component";
import {IotComponent} from "./technology/iot/iot.component";
import {BlockChainComponent} from "./technology/block-chain/block-chain.component";
import {MachineLearningComponent} from "./technology/machine-learning/machine-learning.component";
import {ProjectManagementComponent} from "./services/project-management/project-management.component";
import {ServiceTrainingComponent} from "./services/service-training/service-training.component";
import {ConsultingComponent} from "./services/consulting/consulting.component";
import {IndustryComponent} from "./industry/industry.component";
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
    {path: 'technology-iot', component: IotComponent},
    {path: 'technology-blockchain', component: BlockChainComponent},
    {path: 'technology-machine-learning', component: MachineLearningComponent},
    {path: 'project-management', component: ProjectManagementComponent},
    {path: 'support-service', component: ServiceTrainingComponent},
    {path: 'consulting', component: ConsultingComponent},
    {path: 'industry', component: IndustryComponent},
    {path: 'contact-us', component: ContactUsComponent},
    {path: 'careers', component: CareersComponent},
    {path: 'webinars', component: WebinarsComponent},
    {path: 'webinar-AZURE', component: WebinarAzureComponent},
    {path: 'white-papers', component: WhitePapersComponent},
    {path: 'privacy-policy', component: PrivcyPolicyComponent},
    {path: 'whitepaper-transformSalesForce', component: TransformSalesForceComponent},
    {path: 'whitepaper-useOfIntelligentTechnologiesInFarming', component: IntelligentTechnologyFarmingComponent},
    {path: 'whitepaper-whatIsPristineSfa', component: PristineSfaComponent},
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled', paramsInheritanceStrategy: 'always'})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
