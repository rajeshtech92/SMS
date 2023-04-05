import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { SupportTicketComponent } from './support-ticket/support-ticket.component';
import { TestingComponent } from './testing/testing.component';
// import { TicketComponent } from './ticket/ticket.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login',component:LoginComponent},




  {path:'',component:HeaderComponent,children:[
    {path:'admin',component:AdminDashboardComponent},
    {path:'project',component:LayoutComponent},
    {path:'invoice',component:InvoicesComponent},
   { path:'ticket',component:SupportTicketComponent}
]},
  {path:'',component:HeaderComponent,children:[{
    path:'project/test', component:TestingComponent
  }]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
