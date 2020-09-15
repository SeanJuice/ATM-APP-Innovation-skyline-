import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private route: Router) { }
  erroMessage: string;
  ShowError:boolean;
  ngOnInit() {
  }
  onSubmit(password,username )
  {
    console.log(password)
    this.route.navigate(['register'])
  }
  Register()
  {
    this.route.navigate(['register'])
  }
}
