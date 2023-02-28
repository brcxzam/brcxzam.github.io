import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConversionsComponent } from './conversions/conversions.component';
import { DatesCalculationsComponent } from './dates-calculations/dates-calculations.component';
import { FormComponent } from './form/form.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'conversions',
    component: ConversionsComponent,
  },
  {
    path: 'dates-calculations',
    component: DatesCalculationsComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
  // TODO: Page not found
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
