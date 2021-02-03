import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyNumbers2Component } from './my-numbers2/my-numbers2.component';

const routes: Routes = [
  {path:'second-page', component: MyNumbers2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
