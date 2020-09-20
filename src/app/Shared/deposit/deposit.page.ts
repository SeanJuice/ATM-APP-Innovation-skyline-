import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.page.html',
  styleUrls: ['./deposit.page.scss'],
})
export class DepositPage implements OnInit {
  name: string;
  constructor(private router:Router) { }

  ngOnInit() {
  }

    store(e){
      sessionStorage["DepositName"] = e.target.name.value;
      this.router.navigate(['deposit/Reference'])
    }
  
}
