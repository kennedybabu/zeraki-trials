import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis
} from "ng-apexcharts";

export type chartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  labels: string[];
  stroke: any; // ApexStroke;
  dataLabels: any; // ApexDataLabels;
  fill: ApexFill;
  tooltip: ApexTooltip;
  colors?: string[]
};


@Component({
  selector: 'app-total-users-pie-chart',
  templateUrl: './total-users-pie-chart.component.html',
  styleUrls: ['./total-users-pie-chart.component.scss']
})
export class TotalUsersPieChartComponent implements OnInit {

  chart: any = []
  @ViewChild('barChart') barChart!: ChartComponent
  barOptions!: Partial<chartOptions>


  constructor() {
    this.barOptions = {
      series: [
        {
          name: "students",
          type: "area",
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752]
        },
        {
          name: "Mean Grade",
          type: "line",
          data: [63, 62, 59, 30, 43, 22, 75, 61, 52]
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      stroke: {
        width: [0, 4]
      },     
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
        style: {
          colors: ['#90e0ef']
        }
      },
      labels: [
        "Machakos",
        "Kitui",
        "Taita Taveta",
        "Makueni",
        "Busia",
        "Homabay",
        "Migori",
        "Siaya",
        "Kisumu"
      ],
      xaxis: {
        type: "category"
      },
      yaxis: [
        {
          title: {
            text: "Income"
          }
        },
        {
          opposite: true,
          title: {
            text: "Farmers"
          }
        }
      ],
      colors: ['#98c1d9', '#540d6e']
    }; 

  }


  ngOnInit(): void {
    //  this.chart = new Chart('', {

    //  }) 
  }

}
