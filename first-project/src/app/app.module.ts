import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesExamplesComponent } from './directives-examples/directives-examples.component';
import { MyTableComponent } from './my-table/my-table.component';
import { SwitchExampleComponent } from './switch-example/switch-example.component';
import { MyCardComponent } from './my-card/my-card.component';
import { NumbersCheckComponent } from './numbers-check/numbers-check.component';
import { MyCalculatorComponent } from './my-calculator/my-calculator.component';
import { MyHelloComponent } from './my-hello/my-hello.component';
import { MyNumbersComponent } from './my-numbers/my-numbers.component';
import { MyNumbers2Component } from './my-numbers2/my-numbers2.component';
import { MyNamesComponent } from './my-names/my-names.component';
import { NewCalculatorComponent } from './new-calculator/new-calculator.component';
import { SelectComponentComponent } from './select-component/select-component.component';
import { MyImageComponent } from './my-image/my-image.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { VacancyPageComponent } from './vacancy-page/vacancy-page.component';
import { CandidatsPageComponent } from './candidats-page/candidats-page.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { ZooComponent } from './zoo/zoo.component';
import { PandaComponent } from './panda/panda.component';
import { TigerComponent } from './tiger/tiger.component';
import { TableAnimalsComponent } from './table-animals/table-animals.component';
import { MyStudentsComponent } from './my-students/my-students.component';
import { MyCarComponent } from './my-car/my-car.component';
import { ShopComponent } from './shop/shop.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DirectivesExamplesComponent,
    MyTableComponent,
    SwitchExampleComponent,
    MyCardComponent,
    NumbersCheckComponent,
    MyCalculatorComponent,
    MyHelloComponent,
    MyNumbersComponent,
    MyNumbers2Component,
    MyNamesComponent,
    NewCalculatorComponent,
    SelectComponentComponent,
    MyImageComponent,
    SecondPageComponent,
    VacancyPageComponent,
    CandidatsPageComponent,
    VacancyComponent,
    ZooComponent,
    PandaComponent,
    TigerComponent,
    TableAnimalsComponent,
    MyStudentsComponent,
    MyCarComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
