import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { CarEditComponent } from './car-edit/car-edit.component';
import { OwnersListComponent } from './owners-list/owners-list.component'
import { OwnerEditComponent} from './owner-edit/owner-edit.component'

const routes: Routes = [
  { path: '', redirectTo: '/car-list', pathMatch: 'full' },
  {
    path: 'car-list',
    component: CarListComponent
  },
  {
    path: 'car-add',
    component: CarEditComponent
  },
  {
    path: 'car-edit/:id',
    component: CarEditComponent
  },
  {
    path: 'owners-list',
    component: OwnersListComponent
  },
  {
    path: 'owner-edit',
    component: OwnerEditComponent
  },
  {
    path: 'owner-edit/:dni',
    component: OwnerEditComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
