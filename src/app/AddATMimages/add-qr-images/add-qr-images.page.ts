import { Component, OnInit } from '@angular/core';
import { FileUpload } from '../file.model';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-add-qr-images',
  templateUrl: './add-qr-images.page.html',
  styleUrls: ['./add-qr-images.page.scss'],
})
export class AddQrImagesPage implements OnInit {
  currentFileUpload: FileUpload;
  selectedFiles: FileList; 
  email:string;
  progress: { percentage: number } = { percentage: 0 };
  constructor(private ImagesSev:ImagesService) { }

  ngOnInit() {
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
    }
    upload(Bankinfo)
      {
        const id = localStorage.getItem("UmuntuId")
        const file = this.selectedFiles.item(0);
        this.selectedFiles = undefined;
        this.currentFileUpload = new FileUpload(file);
        this.ImagesSev.pushFileToStorage(this.currentFileUpload,Bankinfo,this.progress)
        
        //this.dismiss()
       
      }
}
