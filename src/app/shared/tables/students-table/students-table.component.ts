import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Student } from '../../interface/student';
import { StudentServiceTsService } from 'src/app/services/student.service.ts.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['username', 'gender', 'class', 'msisdn','details']
  dataSource = new MatTableDataSource<Student>
  students: Student[]=[]

  @ViewChild(MatPaginator) paginator!: MatPaginator 
  @ViewChild(MatSort) sort!: MatSort 

  constructor(
    private router:Router,
    private studentsService:StudentServiceTsService) {}

  ngOnInit(): void {
    this.getAllStudents()    
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator 
    this.dataSource.sort = this.sort 
  }

  getAllStudents() {
    this.studentsService.getAllStudents().subscribe((res) => {
      if(res.statusCode == 200) {
        this.dataSource.data = res.message
        this.students = res.message
      }
    })
  }

  viewProfile(row: any) {
    console.log(row)
    this.router.navigate([`profile/${row.userId}`])
  }

  applyFilter(event:Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
