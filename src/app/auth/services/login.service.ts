import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(data: FormData):Observable<any> {   

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
          "userId": 213
        },
        {
          "username": 'Brian Leo',
          "role": 'admin',
          "gender": 'male',
          "age": '45',
          "msisdn":'0709012312',
          "password": '1235',
          "userId": 213
        },
        {
          "username": 'Alex Musili',
          "role": 'teacher',
          "gender": 'male',
          "age": '32',
          "msisdn":'0709012312',
          "password": '1235',
          "userId": 213
        },
      ]
    }
  )
  }
}
