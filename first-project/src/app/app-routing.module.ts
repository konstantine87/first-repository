import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondPageComponent } from './second-page/second-page.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { ZooComponent } from './zoo/zoo.component';

const routes: Routes = [
  {path:'second-page', component: SecondPageComponent},
  {path:'vacancy', component: VacancyComponent},
  {path: 'zoo', component: ZooComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
