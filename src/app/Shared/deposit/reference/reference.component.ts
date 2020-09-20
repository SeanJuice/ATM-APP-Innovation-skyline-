import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss'],
})
export class ReferenceComponent implements OnInit {

  constructor(private  router:Router) { }

  ngOnInit() {}
  
  next()
    {
        this.router.navigate(['deposit/Details'])
    }
}
