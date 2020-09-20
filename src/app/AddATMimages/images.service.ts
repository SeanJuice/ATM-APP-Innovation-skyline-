import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { FormControl, FormGroup } from "@angular/forms";
import { AngularFireDatabase ,AngularFireList } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { FileUpload } from './file.model';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class ImagesService {

  constructor(private firestore: AngularFirestore,private db: AngularFireDatabase, private alert: AlertController) { }
  private basePath = '/Banks';
  alreadyRan = true;
  BankID:string;

    //uploadig document
    pushFileToStorage(fileUpload: FileUpload,data,progress: { percentage: number }) {
      //this declares the path per user  userId/TypeOfdocument/TheDocument /${TypeOFDoc}
     
      const storageRef = firebase.storage().ref();
      const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);
      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          // in progress
          const snap = snapshot as firebase.storage.UploadTaskSnapshot;
          progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        },
          (error) =>{
            console.log(error)
          },
        ()=>{
          //success
          uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
            console.log('File available at', downloadURL);
            console.log(downloadURL)
            fileUpload.url = downloadURL;
            fileUpload.name = fileUpload.file.name;

            console.log("here", data)
            if(this.alreadyRan == true)
            {
              this.alreadyRan =false;
              return this.firestore.collection('Bankpictures').add({
                Name: fileUpload.file.name,
                Url: downloadURL,
                BankName: data,
                Date: Date.now()
              }).then(rrr=>{
               this.BankID =  rrr.id;
               console.log(this.BankID)
               this.successNotification(this.BankID)
              })
            }
           
          
            console.log("successful") 
          });
        }
  
      )
    }

    async successNotification(Code) {
      const alert = await this.alert.create({
        cssClass: 'Confirmations',
        header: 'Successfully Submitted',
        message: `Bank database ID: ${ Code}`,
        buttons: [
          {text: 'OK',
          handler: () => {
            
          }}
      ]
      });
      await alert.present();
    }
}
