import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MixedChartComponent } from '../shared/charts/mixed-chart/mixed-chart.component';
@NgModule({
  declarations: [
    DashboardComponent,
    MixedChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgApexchartsModule
  ]
})
export class DashboardModule { }
