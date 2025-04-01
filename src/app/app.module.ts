import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';
import { FormsModule } from '@angular/forms';
import { WhatsappButtonComponent } from './whatsapp-button/whatsapp-button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './service/services.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    BookingConfirmationComponent,
    BookingFormComponent,
    WhatsappButtonComponent,
    NavbarComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule, 
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true,
      progressBar: true
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
