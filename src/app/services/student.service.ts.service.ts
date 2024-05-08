import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceTsService {

  constructor(private http:HttpClient) { }

  getAllStudents(): Observable<any> {
    return of (
      {
        "statusCode": 200,
        "message": [
          {
            "username": 'Mona Lisa',
            "role": 'student',
            "gender": 'female',
            "age": '15',
            "msisdn":'0709012312',
            "password": '1235',
            "userId": 210,
            "stream": 'Pluto',
            "class": 1
          },
          {
            "username": 'Kim Andy',
            "role": 'student',
            "gender": 'male',
            "age": '14',
            "msisdn":'0709000312',
            "password": '1235',
            "userId": 213,
            "stream": 'Venus',
            "class": 1
          },
          {
            "username": 'Tom Hanks',
            "role": 'student',
            "gender": 'male',
            "age": '16',
            "msisdn":'0702112312',
            "password": '1235',
            "userId": 211,
            "stream": 'Pluto',
            "class": 1
          },
        ]
      }
    )
  }
}
