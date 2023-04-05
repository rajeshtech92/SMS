import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDrawerContainer, MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { TestingComponent } from './testing/testing.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { InvoicesComponent } from './invoices/invoices.component';
import {MatSelectModule} from '@angular/material/select';
import {NgxUiLoaderHttpModule, NgxUiLoaderModule} from 'ngx-ui-loader';
import { FormsModule } from '@angular/forms';
import { SupportTicketComponent } from './support-ticket/support-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    AdminDashboardComponent,
    LoginComponent,

    TestingComponent,
     InvoicesComponent,
     SupportTicketComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgbDropdownModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    ChartsModule,
    MatSelectModule,
    NgxUiLoaderModule,
    //NgMultiSelectDropDownModule.forRoot(),
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true
    }),

    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
