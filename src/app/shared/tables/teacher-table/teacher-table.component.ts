import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { Teacher } from 'src/app/services/teacher/teacher';
import { TeacherService } from 'src/app/services/teacher/teacher.service';

@Component({
  selector: 'app-teacher-table',
  templateUrl: './teacher-table.component.html',
  styleUrls: ['./teacher-table.component.scss']
})
export class TeacherTableComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['username', 'gender', 'class', 'msisdn']
  dataSource = new MatTableDataSource<Teacher>

  @ViewChild(MatPaginator) paginator!: MatPaginator 
  @ViewChild(MatSort) sort!: MatSort 

  constructor(private teacherService:TeacherService) {}

  teachers: Teacher[] =[]

  ngOnInit(): void {
    this.getTeachers()
      
  }

  getTeachers() {
    this.teacherService.getAllTeachers().subscribe((res) => {
      if(res.statusCode == 200) {
        this.teachers = res.message 
        this.dataSource.data = res.message
      }
    })
  }

  ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator 
      this.dataSource.sort = this.sort 
  }

  applyFilter(event:Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
