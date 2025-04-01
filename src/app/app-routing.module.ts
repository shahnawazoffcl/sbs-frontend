import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './service/services.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { WhatsappButtonComponent } from './whatsapp-button/whatsapp-button.component';

const routes: Routes = [{ path: '', component: HomeComponent },
  { path: 'whatsapp', component: WhatsappButtonComponent },
  { path: 'home', component: HomeComponent },
  { path: 'confirmation', component: BookingConfirmationComponent },
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
