import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MixedChartComponent } from '../shared/charts/mixed-chart/mixed-chart.component';
import { TeacherTableComponent } from '../shared/tables/teacher-table/teacher-table.component';
import { StudentsTableComponent } from '../shared/tables/students-table/students-table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    DashboardComponent,
    MixedChartComponent,
    TeacherTableComponent,
    StudentsTableComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule
  ]
})
export class DashboardModule { }
