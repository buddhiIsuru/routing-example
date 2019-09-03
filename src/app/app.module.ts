import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from '../app/app-routing.module';
import { NavBarComponent } from './view/particle/nav-bar/nav-bar.component';
import { MainComponent } from './view/particle/main/main.component';
import { SideBarComponent } from './view/particle/side-bar/side-bar.component';
import { CustomerComponent } from './view/customer/customer.component';
import { ItemComponent } from './view/item/item.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainComponent,
    SideBarComponent,
    CustomerComponent,
    ItemComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
