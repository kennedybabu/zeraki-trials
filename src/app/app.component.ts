import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'zeraki';

  constructor(
    private spinner: NgxSpinnerService
  ){
    this.spinner.show()

    setTimeout(() => {
      this.spinner.hide()
    }, 1000)
  }

  ngOnInit(): void {
    this.spinner.show()

    setTimeout(() => {
      this.spinner.hide()
    }, 1000)
  }
}
