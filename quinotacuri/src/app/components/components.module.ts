import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ComponentsRoutingModule } from './components-routing.module';
import { NgChartsModule } from 'ng2-charts';
import { UniversityComponent } from './university/university.component';
import { CreaedutaUniversityComponent } from './university/creaeduta-university/creaeduta-university.component';
import { ListaUniversityComponent } from './university/lista-university/lista-university.component';

import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
  
    UniversityComponent,
       CreaedutaUniversityComponent,
       ListaUniversityComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatTableModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ComponentsRoutingModule,
    NgChartsModule,
    MatCardModule,
    
  ]
})
export class ComponentsModule { }
