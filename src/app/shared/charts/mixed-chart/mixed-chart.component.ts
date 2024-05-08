import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis
} from "ng-apexcharts";

export type ChartOptions = {
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
};

@Component({
  selector: 'app-mixed-chart',
  templateUrl: './mixed-chart.component.html',
  styleUrls: ['./mixed-chart.component.scss']
})
export class MixedChartComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent
  public chartOptions!: ChartOptions

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Students",
          type: "column",
          data: [10, 13, 17, 21]
        },
        {
          name: "Mean Mark",
          type: "line",
          data: [81, 82, 79, 72]
        }
      ],
      chart: {
        height: 350,
        type: "line"
      },
      stroke: {
        width: [0, 4]
      },
      title: {
        text: "School Perfomance"
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1]
      },
      labels: [
        "Form 1",
        "Form 2",
        "Form 3",
        "Form 4",

        // "English",
        // "Mathematics",
        // "Kiswahili",
        // "Biology",
        // "Chemistry",
        // "Physics",
        // "Art and Design",
        // "Geography",
      ],
      xaxis: {
        type: "category"
      },
      yaxis: [
        {
          title: {
            text: "Website Blog"
          }
        },
        {
          opposite: true,
          title: {
            text: "Social Media"
          }
        }
      ], 
      fill: {

      },
      tooltip: {

      }
    };
  }
  
  ngOnInit(): void {
      
  }

}
