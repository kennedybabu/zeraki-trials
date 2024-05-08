import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { LoginService } from 'src/app/auth/services/login.service';
import { User } from 'src/app/auth/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userId!: number
  userObject!: any
  users: User[] = []

  constructor(private route:ActivatedRoute,
    private loginService:LoginService
  ){}


  ngOnInit(): void {
      this.route.params.subscribe(
        (params:Params) => {
          this.userId = +params['id']
        })

        this.getUser(this.userId)
  }

  getUser(data: any) {
    this.loginService.login(data).subscribe((res) => {
      console.log(res)
      if(res.statusCode == 200) {
        this.users = res.message 

        this.userObject =  this.users.filter((obj: User) => obj.userId == this.userId)

        console.log(this.userObject)
       
      }
    })
  }

}
