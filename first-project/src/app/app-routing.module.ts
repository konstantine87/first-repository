import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCarComponent } from './my-car/my-car.component';
import { PandaComponent } from './panda/panda.component';

import { SecondPageComponent } from './second-page/second-page.component';
import { ShopComponent } from './shop/shop.component';
import { TigerComponent } from './tiger/tiger.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { ZooComponent } from './zoo/zoo.component';

const routes: Routes = [
  {path:'second-page', component: SecondPageComponent},
  {path:'vacancy', component: VacancyComponent},
  {path: 'zoo', component: ZooComponent},
  {path: 'zoo/tiger', component: TigerComponent},
  {path: 'zoo/panda', component: PandaComponent},
  {path: 'car', component: MyCarComponent},
  {path: 'shop', component: ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
