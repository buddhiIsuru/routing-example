import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './view/particle/main/main.component';
import {DashboardComponent} from './view/dashboard/dashboard.component';
import {ItemComponent} from './view/item/item.component';
import {CustomerComponent} from './view/customer/customer.component';

const route: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          {path: 'customer', component: CustomerComponent},
          {path: 'item', component: ItemComponent},
        ]
      },
    ]
  },
  {path: '', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(route)
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule {
}
