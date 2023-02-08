import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from './components/admin/components/home/home.component';
import { HeaderComponent } from './components/admin/components/header/header.component';
import { FooterComponent } from './components/admin/components/footer/footer.component';
import { ContactsComponent } from './components/admin/components/contacts/contacts.component';
import { ContactsDetailsComponent } from './components/admin/components/contacts-details/contacts-details.component';
import { AdminDashboardComponent } from './components/admin/components/admin-dashboard/admin-dashboard.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactsComponent,
    ContactsDetailsComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
