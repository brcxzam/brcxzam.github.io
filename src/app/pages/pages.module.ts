import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { ConversionsComponent } from './conversions/conversions.component';
import { DatesCalculationsComponent } from './dates-calculations/dates-calculations.component';
import { FormComponent } from './form/form.component';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NameDialogComponent } from './dialogs/name-dialog/name-dialog.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LetterChangePipe } from './pipes/letter-change/letter-change.pipe';
import { AlertDialogComponent } from './dialogs/alert-dialog/alert-dialog.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    ConversionsComponent,
    DatesCalculationsComponent,
    FormComponent,
    PagesComponent,
    NameDialogComponent,
    LetterChangePipe,
    AlertDialogComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class PagesModule {}
