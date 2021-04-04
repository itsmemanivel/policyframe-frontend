import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';

import { ChartsModule } from 'ng2-charts';

import { TestimonalsComponent } from './components/testimonals/testimonals.component';
import { EbookComponent } from './components/ebook/ebook.component';
import { EmbedVideosComponent } from './components/embed-videos/embed-videos.component';
import { PPTComponent } from './components/ppt/ppt.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { HelpCategoryComponent } from './components/help-category/help-category.component';
import { HelpComponent } from './components/help/help.component';
import { ListAdminsComponent } from './components/list-admins/list-admins.component';
import { ListClientsComponent } from './components/list-clients/list-clients.component';

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
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { TruncateTextPipe } from '../pipes/truncate-text.pipe';
import { ImageDataPipe } from '../pipes/image-data.pipe';

import { DialogueComponent } from './components/dialogue/dialogue.component'


@NgModule({
    imports: [
        CommonModule, FormsModule,
        ReactiveFormsModule,
        AdminRoutingModule,
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        MatDividerModule,
        MatSelectModule,
        MatSidenavModule,
        MatToolbarModule,
        ChartsModule,
        MatDialogModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressBarModule,
        MatTabsModule,
        MatChipsModule,
        MatAutocompleteModule,
        DeviceDetectorModule.forRoot(),
        MDBBootstrapModule.forRoot()
    ],
    declarations:[AdminDashboardComponent,
        TestimonalsComponent,
        EbookComponent,
        EmbedVideosComponent,
        PPTComponent,
        TemplatesComponent,
        HelpCategoryComponent,
        HelpComponent,
        ListAdminsComponent,
        ListClientsComponent,
        DashboardComponent,
        TruncateTextPipe,
        DialogueComponent,
        ImageDataPipe,

    ],
    entryComponents: [ DialogueComponent],
    bootstrap: [ DialogueComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
        ],
})

export class AdminModule{}
