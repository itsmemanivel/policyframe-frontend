import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientRoutingModule } from './client-routing.module';
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
import { CopyClipboardDirective } from './components/services/copy-clipboard.directive';

import { PrivacyPolicyComponent } from './components/policy/privacy-policy/privacy-policy.component';
import { AppPrivacyPolicyComponent } from './components/policy/app-privacy-policy/app-privacy-policy.component';
import { CcpaPrivacyPolicyComponent } from './components/policy/ccpa-privacy-policy/ccpa-privacy-policy.component';
import { GdprPrivacyPolicyComponent } from './components/policy/gdpr-privacy-policy/gdpr-privacy-policy.component'; 
import { NonDisclosureComponent } from './components/non-disclosure/non-disclosure.component';



import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion'; 

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BlogsComponent } from './components/blogs/blogs.component';
import { EbooksComponent } from './components/ebooks/ebooks.component';
import { EmbedVideosComponent } from './components/embed-videos/embed-videos.component';
import { PptComponent } from './components/ppt/ppt.component';
import { TemplatesComponent } from './components/templates/templates.component';


@NgModule({
    imports: [
        CommonModule, FormsModule,
        ClientRoutingModule,
        MatToolbarModule,
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        MatDividerModule,
        MatSelectModule,
        MatSidenavModule,
        MatToolbarModule,
        MatDialogModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressBarModule,
        MatTabsModule,
        MatExpansionModule,
        CarouselModule.forRoot()
    ],
    declarations: [
        HomepageComponent,
        
        FooterComponent,
        
        DashboardComponent,
        
        PrivacyPolicyComponent,
        
        TermsAndConditionsComponent,
        
        EULAPolicyComponent,
        
        RefundPolicyComponent,
        
        CookiesPolicyComponent,
        
        TermsOfServiceComponent,
        
        TermsOfUseComponent,
        
        DisclaimerPolicyComponent,
        
        CopyClipboardDirective,
                
        AppPrivacyPolicyComponent,
        
        CcpaPrivacyPolicyComponent,
        
        GdprPrivacyPolicyComponent,
        
        NonDisclosureComponent,
        
        BlogsComponent,
        
        EbooksComponent,
        
        EmbedVideosComponent,
        
        PptComponent,
        
        TemplatesComponent,


        

        ],

    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
        ],    
})

export class ClientModule { }


