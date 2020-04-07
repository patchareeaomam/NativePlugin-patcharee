import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { CardIO } from '@ionic-native/card-io';
import { Flashlight } from '@ionic-native/flashlight';
import { Calendar } from '@ionic-native/calendar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  text:any;
  format:any;
  constructor(public navCtrl: NavController, private camera: Camera, private cardIO: CardIO, private flashlight: Flashlight, private calendar: Calendar) {

  }

  Camera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
    });
  }

  CardIO(){
    this.cardIO.canScan()
  .then(
    (res: boolean) => {
      if(res){
        let options = {
          requireExpiry: true,
          requireCVV: false,
          requirePostalCode: false
        };
        this.cardIO.scan(options);
      }
    }
  );
  }

  Flashlight(){
    this.flashlight.switchOn()
  }
  
  Calendar(){
    this.calendar.createCalendar('MyCalendar').then(
      (msg) => { console.log(msg); },
      (err) => { console.log(err); }
    );
  }
}
