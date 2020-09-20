import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  detailsShow = true;
  CreditcardDetails = false
  constructor(private router:Router,private AfAuth:AngularFireAuth) { }

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
async signUP(form:NgForm)
 {
  const { Username,password } = form.value
  let userDummyEmail =`${Username}@gmail.com`
  await this.AfAuth.createUserWithEmailAndPassword(userDummyEmail,password).then(res=>{
    this.router.navigate(['./login'])
  })
 
 }
}
