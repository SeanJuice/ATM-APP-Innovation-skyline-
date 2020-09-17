import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactionoptions',
  templateUrl: './transactionoptions.page.html',
  styleUrls: ['./transactionoptions.page.scss'],
})
export class TransactionoptionsPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  Amount(){
    this.route.navigate(['withdraw'])
  }

}
