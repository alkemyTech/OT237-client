import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationComponent } from './donation/donation.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
  {
    path:"",
    children:[
      {path: "donar", component: DonationComponent},
      {path: "gracias", component: ThanksComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonationRoutingModule { }