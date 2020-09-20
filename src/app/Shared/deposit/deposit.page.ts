import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.page.html',
  styleUrls: ['./deposit.page.scss'],
})
export class DepositPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  next()
    {
        this.router.navigate(['deposit/Reference'])
    }
  
}
