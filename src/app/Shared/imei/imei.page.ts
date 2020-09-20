import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imei',
  templateUrl: './imei.page.html',
  styleUrls: ['./imei.page.scss'],
})
export class ImeiPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  back(){
    this.route.navigate(['login'])
  }

}
