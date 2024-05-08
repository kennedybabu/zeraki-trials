import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/auth/user.model';
import { ChartComponent } from "ng-apexcharts";
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
import { StudentServiceTsService } from 'src/app/services/student.service.ts.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent
  chartOptions!: ChartOptions
  userObject!: User
  totalMaleStudents!: User[]
  totalFemaleStudents!: User[]
  allStudents!: User[]

  constructor(
    private studentService:StudentServiceTsService) {


    this.chartOptions = {
      series: [34, 44],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: ["Male", "Female"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  ngOnInit(): void {    
    let user = localStorage.getItem('user')
    if(user) {
      this.userObject = JSON.parse(user)
    }    


    this.getTotalStudents()
  }

  //teacher role requests 
  getTotalStudents() {
    this.studentService.getAllStudents().subscribe((res) => {
      if(res.statusCode == 200) {
        this.allStudents = res.message
        
        if(this.allStudents) {
          this.totalMaleStudents = this.allStudents.filter((obj:User) => obj.gender == 'male')
          this.totalFemaleStudents = this.allStudents.filter((obj:User) => obj.gender == 'female')

          //populate the gender chart
          this.chartOptions = {
            ...this.chartOptions,
            series: [
              this.totalFemaleStudents.length,
              this.totalMaleStudents.length
            ]
          }
        }
      }
    })
  }
}


