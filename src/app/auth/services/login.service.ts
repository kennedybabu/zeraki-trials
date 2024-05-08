import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient, private router: Router) { }

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
          "userId": 42324240
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
          "userId": 9083
        },
        {
          "username": 'Nemo Moe',
          "role": 'teacher',
          "gender": 'female',
          "age": '42',
          "msisdn":'0709012110',
          "password": '1235',
          "userId": 3210,
        },
      ]
    }
  )
  }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value)
  }

  public getData(key: string) {
    return localStorage.getItem(key)
  }

  public removeData(key:string) {
    localStorage.removeItem(key)
  }

  public clearData() {
    localStorage.clear()
  }

  logout() {
    this.clearData()
    this.router.navigate(['auth/login'])
  }

  // private encrypt(obj: object, key: string) {
  //   return CryptoJS.AES.encrypt(JSON.stringify(obj), key).toString()
  // }

  // private decrypt(objToDecrypt: string, key: string) {
  //   return CryptoJS.AES.decrypt(objToDecrypt, key).toString(CryptoJS.enc.Utf8)
  // }


}
