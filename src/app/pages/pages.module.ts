import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { ConversionsComponent } from './conversions/conversions.component';
import { DatesCalculationsComponent } from './dates-calculations/dates-calculations.component';
import { FormComponent } from './form/form.component';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    WelcomeComponent,
    ConversionsComponent,
    DatesCalculationsComponent,
    FormComponent,
    PagesComponent,
  ],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
