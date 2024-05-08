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
            "userId": 42324240,
            "stream": 'Pluto',
            "class": '1-pluto'
          },
          {
            "username": 'Kim Andy',
            "role": 'student',
            "gender": 'male',
            "age": '14',
            "msisdn":'0709000312',
            "password": '1235',
            "userId": 8712342,
            "stream": 'Venus',
            "class": '1-venus'
          },
          {
            "username": 'Tom Hanks',
            "role": 'student',
            "gender": 'male',
            "age": '16',
            "msisdn":'0702112312',
            "password": '1235',
            "userId": 2018213331,
            "stream": 'Pluto',
            "class": '2-pluto'
          },
          {
            "username": 'Alice Waini',
            "role": 'student',
            "gender": 'female',
            "age": '17',
            "msisdn":'0702112312',
            "password": '1235',
            "userId": 200921,
            "stream": 'Pluto',
            "class": '2-venus'
          },
          {
            "username": 'Neal Harris',
            "role": 'student',
            "gender": 'female',
            "age": '14',
            "msisdn":'070211312',
            "password": '1235',
            "userId": 5421,
            "stream": 'Pluto',
            "class": '3-venus'
          },
          {
            "username": 'Eve Lyne',
            "role": 'student',
            "gender": 'female',
            "age": '18',
            "msisdn":'0702112312',
            "password": '1235',
            "userId": 20001,
            "stream": 'Pluto',
            "class": '3-pluto'
          },
          {
            "username": 'Tom Hiddlestone',
            "role": 'student',
            "gender": 'male',
            "age": '16',
            "msisdn":'0702112312',
            "password": '1235',
            "userId": 21111111,
            "stream": 'Pluto',
            "class": '4-venus'
          },
          {
            "username": 'Njeri Wahomes',
            "role": 'student',
            "gender": 'male',
            "age": '16',
            "msisdn":'0702112312',
            "password": '1235',
            "userId": 6311632,
            "stream": 'Pluto',
            "class": '4-pluto'
          },
          {
            "username": 'Hamlet Ndinda',
            "role": 'student',
            "gender": 'female',
            "age": '15',
            "msisdn":'0702111112',
            "password": '1235',
            "userId": 6311002,
            "stream": 'Pluto',
            "class": '2-pluto'
          },
        ]
      }
    )
  }
}
