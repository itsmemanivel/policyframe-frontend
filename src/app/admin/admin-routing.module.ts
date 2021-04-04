import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TestimonalsComponent } from './components/testimonals/testimonals.component';
import { EbookComponent } from './components/ebook/ebook.component';
import { EmbedVideosComponent } from './components/embed-videos/embed-videos.component';
import { PPTComponent } from './components/ppt/ppt.component';
import { TemplatesComponent } from './components/templates/templates.component';
import { HelpCategoryComponent } from './components/help-category/help-category.component';
import { HelpComponent } from './components/help/help.component';
import { ListAdminsComponent } from './components/list-admins/list-admins.component';
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [

  {path: '', component: AdminDashboardComponent,



// {path:'components', loadChildren: () =>  import ('../admin/components/components.module').then(m=>m.ComponentsModule)},
children: [
  { path: '', component: DashboardComponent },

  { path: 'testimonals', component:  TestimonalsComponent },
  { path: 'ebooks', component: EbookComponent },
  { path: 'embed-videos', component: EmbedVideosComponent },
  { path: 'list-admins', component: ListAdminsComponent },

  { path: 'list-clients', component: ListClientsComponent },

  { path: 'ppt', component: PPTComponent },
  { path: 'templates', component: TemplatesComponent },
  { path: 'help', component: HelpComponent },

  { path: 'help-category', component: HelpCategoryComponent },




],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
