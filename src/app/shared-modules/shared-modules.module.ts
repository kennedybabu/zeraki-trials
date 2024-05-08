import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../shared/footer/footer.component';
import { TotalUsersPieChartComponent } from '../shared/charts/pie-charts/total-users-pie-chart/total-users-pie-chart.component';

@NgModule({
  declarations: [
    FooterComponent,
    TotalUsersPieChartComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    FooterComponent,
    TotalUsersPieChartComponent
  ]
})
export class SharedModulesModule { }
