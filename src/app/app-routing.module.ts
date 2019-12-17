import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoneyBagComponent } from './money-bag/money-bag.component';
import { RegisterComponent } from './register/register.component';
import { LastChanceComponent } from './last-chance/last-chance.component';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'pickabag', component: MoneyBagComponent},
  { path: 'last-chance', component: LastChanceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
