import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculoListComponent } from './vehiculo-list/vehiculo-list.component';
import { VehiculoCreateComponent } from './vehiculo-create/vehiculo-create.component';
import { VehiculoEditComponent } from './vehiculo-edit/vehiculo-edit.component';

const routes: Routes = [
  { path: 'vehiculos', component: VehiculoListComponent },
  { path: 'vehiculos/create', component: VehiculoCreateComponent },
  { path: 'vehiculos/edit/:id', component: VehiculoEditComponent },
  { path: '', redirectTo: '/vehiculos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
