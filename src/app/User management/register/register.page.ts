import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  detailsShow = true;
  CreditcardDetails = false
  constructor() { }

  ngOnInit() {
  }
 flip()
 {
   this.detailsShow =false
   this.CreditcardDetails =true
 }

}
