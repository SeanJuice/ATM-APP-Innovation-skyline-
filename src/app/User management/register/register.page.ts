import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  detailsShow = true;
  CreditcardDetails = false
  constructor(private router:Router) { }

  ngOnInit() {
  }
 flip()
 {
   this.detailsShow =false
   this.CreditcardDetails =true
 }
 BackHome()
 {
    this.router.navigate(['./login'])
 }
}
