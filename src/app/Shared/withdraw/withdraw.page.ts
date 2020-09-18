import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.page.html',
  styleUrls: ['./withdraw.page.scss'],
})
export class WithdrawPage implements OnInit {

  constructor(private route: Router) { }
  amount: string;
  ngOnInit() {
  }

  Transaction(e){
    sessionStorage["WithdrawalAmount"] = e.target.amount.value;
    console.log(sessionStorage["WithdrawalAmount"]);
    this.route.navigate(['scanner'])
  }
}
