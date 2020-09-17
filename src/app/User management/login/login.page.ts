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
  Register()
  {
    this.route.navigate(['register'])
  }
  goToAtms(){
    this.route.navigate(['map'])
  }
  login(){
    this.route.navigate(['loginscreen'])
  }
}
