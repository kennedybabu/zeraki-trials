import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http:HttpClient) { }


  getAllTeachers(): Observable<any> {
    return of (
      {
        "statusCode": 200,
        "message": [
          {
            "username": 'Alex Musili',
            "role": 'teacher',
            "gender": 'male',
            "age": '32',
            "msisdn":'0709012312',
            "password": '1235',
            "userId": 9083,
            "class": "1-pluto"
          },
          {
            "username": 'Nemo Moe',
            "role": 'teacher',
            "gender": 'female',
            "age": '42',
            "msisdn":'0709012110',
            "password": '1235',
            "userId": 3210,
            "class": "1-venus"
          },
          {
            "username": 'Tom Kiilu',
            "role": 'teacher',
            "gender": 'male',
            "age": '30',
            "msisdn":'070002312',
            "password": '1235',
            "userId": 242,
            "class": "2-pluto"
          }, 
          {
            "username": 'Paul Giammati',
            "role": 'teacher',
            "gender": 'male',
            "age": '39',
            "msisdn":'070212008',
            "password": '1235',
            "userId": 233,
            "class": "2-venus"
          },
          {
            "username": 'Darmian Lewis',
            "role": 'teacher',
            "gender": 'male',
            "age": '37',
            "msisdn":'0709011111',
            "password": '1235',
            "userId": 913,
            "class": "3-pluto"
          },
          {
            "username": 'Nina Helen',
            "role": 'teacher',
            "gender": 'female',
            "age": '29',
            "msisdn":'0709012122',
            "password": '1235',
            "userId": 145,
            "class": "3-venus"
          },
          {
            "username": 'Rita Olii',
            "role": 'teacher',
            "gender": 'female',
            "age": '54',
            "msisdn":'0709012312',
            "password": '1235',
            "userId": 1111,
            "class": "4-pluto"
          },
          {
            "username": 'Davis Mia',
            "role": 'teacher',
            "gender": 'male',
            "age": '53',
            "msisdn":'0709021312',
            "password": '1235',
            "userId": 213,
            "class": "4-venus"
          }
        ]
      }
    )
  }

}
