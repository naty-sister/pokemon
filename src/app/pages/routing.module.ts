import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatailsComponent } from './datails/datails.component';

//Component
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
      path: 'datails',
      component: DatailsComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
