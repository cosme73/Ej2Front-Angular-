import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversityComponent } from './university/university.component';
import { CreaedutaUniversityComponent } from './university/creaeduta-university/creaeduta-university.component';
import { ListaUniversityComponent } from './university/lista-university/lista-university.component';
import { GuardService } from '../services/guard.service';

const routes: Routes = [
  {
    path: 'university',
    canActivate: [GuardService],

    component: UniversityComponent,
    children: [
      {
        path: 'editar/:id',
        component: CreaedutaUniversityComponent,
      },
      {
        path: 'crear',
        component: CreaedutaUniversityComponent,
      },
      {
        path: 'lista',
        component: ListaUniversityComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
