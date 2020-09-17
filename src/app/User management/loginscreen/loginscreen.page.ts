import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.page.html',
  styleUrls: ['./loginscreen.page.scss'],
})
export class LoginscreenPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  onSubmit(password,username )
  {
    console.log(password)
    this.route.navigate(['transactionoptions'])
  }
  login(){
    this.route.navigate(['transactionoptions'])

  }
}
