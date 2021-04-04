import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { EULAPolicyComponent } from './components/eula-policy/eula-policy.component';
import { RefundPolicyComponent } from './components/refund-policy/refund-policy.component';
import { CookiesPolicyComponent } from './components/cookies-policy/cookies-policy.component';
import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';
import { DisclaimerPolicyComponent } from './components/disclaimer-policy/disclaimer-policy.component';

import { PrivacyPolicyComponent } from './components/policy/privacy-policy/privacy-policy.component';
import { AppPrivacyPolicyComponent } from './components/policy/app-privacy-policy/app-privacy-policy.component';
import { CcpaPrivacyPolicyComponent } from './components/policy/ccpa-privacy-policy/ccpa-privacy-policy.component';
import { GdprPrivacyPolicyComponent } from './components/policy/gdpr-privacy-policy/gdpr-privacy-policy.component'; 
import { NonDisclosureComponent } from './components/non-disclosure/non-disclosure.component';

import { BlogsComponent } from './components/blogs/blogs.component';
import { EbooksComponent } from './components/ebooks/ebooks.component';
import { EmbedVideosComponent } from './components/embed-videos/embed-videos.component';
import { PptComponent } from './components/ppt/ppt.component';
import { TemplatesComponent } from './components/templates/templates.component';

const routes: Routes = [{
  path: '',
  component: HomepageComponent,
  children: [
    {
      path: '',
      component: DashboardComponent
    },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
    { path: 'eula-policy', component: EULAPolicyComponent },
    { path: 'refund-policy', component: RefundPolicyComponent },

    { path: 'cookies-policy', component: CookiesPolicyComponent },

    { path: 'terms-of-service', component: TermsOfServiceComponent },
    { path: 'terms-of-use', component: TermsOfUseComponent },
    { path: 'disclaimer-policy', component: DisclaimerPolicyComponent },
    
    { path: 'ecommerce-privacy-policy', component: PrivacyPolicyComponent },

    { path: 'wordpress-privacy-policy', component: PrivacyPolicyComponent },

    { path: 'blog-privacy-policy', component: PrivacyPolicyComponent },

    { path: 'app-privacy-policy', component: AppPrivacyPolicyComponent },

    { path: 'ccpa-privacy-policy', component: CcpaPrivacyPolicyComponent },

    { path: 'gdpr-privacy-policy', component: GdprPrivacyPolicyComponent },


    { path: 'non-disclosure-agreement', component: NonDisclosureComponent },

     { path: 'blogs', component: BlogsComponent },


     { path: 'ebooks', component: EbooksComponent },

     { path: 'ppt', component: PptComponent },

     { path: 'embed-videos', component: EmbedVideosComponent },


     { path: 'templates', component: TemplatesComponent },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }