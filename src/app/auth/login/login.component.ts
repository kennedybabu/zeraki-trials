import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  users: User[]=[]

  constructor(
    private route:Router,
    private formBuilder: FormBuilder,
    private loginService:LoginService) {}

    ngOnInit(): void {
      this.loginForm = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      })  
    }

    login() {
      let username = this.loginForm.value['username']
      let password = this.loginForm.value['password']

      this.loginService.login(this.loginForm.value).subscribe((res) => {
        if(res.statusCode == 200) {
          this.users = res.message
            let user = this.users.filter(obj => obj.username === username && obj.password === password)
            if(user.length > 0) {
              this.loginService.saveData('user', JSON.stringify(user[0]))
              this.route.navigate(['dash'])
          }
        }
      })
    }

    reroute() {
      this.route.navigate(['auth/signup'])
    }

}
