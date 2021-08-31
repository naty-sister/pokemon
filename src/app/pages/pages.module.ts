import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module Routing
import { RoutingModule } from './routing.module';
//Pages
import { HomeComponent } from './home/home.component';
import { DatailsComponent } from './datails/datails.component';


@NgModule({
  declarations: [
    HomeComponent,
    DatailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule 
  ]
})
export class PagesModule { }
