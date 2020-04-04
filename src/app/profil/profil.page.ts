import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  constructor(
    private camera: Camera
) { }
  ngOnInit() {
  }
  async addPhoto() {
    const libraryImage = await this.openLibrary();
    //this.image = 'data:image/jpg;base64,' + libraryImage;
}
async openLibrary() {
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    targetWidth: 1000,
    targetHeight: 1000,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  };
  return await this.camera.getPicture(options);
}

username = window.localStorage.getItem('username');
  email = window.localStorage.getItem('email');
  nom = window.localStorage.getItem('nom');
  prenom = window.localStorage.getItem('prenom')
}
