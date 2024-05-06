import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup

  constructor(
    private route:Router,
    private formBuilder: FormBuilder) {}

    ngOnInit(): void {
      this.loginForm = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
      })  
    }

    login() {
      console.log(this.loginForm.value)
      this.route.navigate(['/'])
    }

    reroute() {
      this.route.navigate(['auth/signup'])
    }

}
