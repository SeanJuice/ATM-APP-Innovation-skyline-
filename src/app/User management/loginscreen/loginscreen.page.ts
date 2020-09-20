import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/auth";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.page.html',
  styleUrls: ['./loginscreen.page.scss'],
})
export class LoginscreenPage implements OnInit {

  constructor(private route: Router,private router:Router,
    private AfAuth:AngularFireAuth) { }

  ngOnInit() {
  }
  async logins(form:NgForm)
  {
    const { Username,password } = form.value
   await this.AfAuth.signInWithEmailAndPassword(Username,password).then(res=>{
  
    form.reset();
    localStorage.setItem('CurrentUser', res.user.uid);
    this.route.navigate(['transactionoptions'])
   });
 
  }
  login(){
  this.route.navigate(['transactionoptions'])

  }
}
