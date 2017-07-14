import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@IonicPage()

@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})
export class AddUserPage {

  name;
  title;
  age;
  location;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddUserPage');
  }

  // Saving the user using [two-way-binding]....
  saveUser()
  {
    // Taking the users input
    let name = this.name;
    let title = this.title;
    let age = this.age;
    let location = this.location;

    // Using Storage to save it locally
    this.storage.set('name', name);
    this.storage.set('title', title);
    this.storage.set('age', age);
    this.storage.set('location', location);
  }
  showUser() {
    // Retrieve local Storage
    let name =  this.storage.get('name').then((val) => {
    console.log(val);});
    let title =  this.storage.get('title').then((val) => {
    console.log(val);});
    let age =  this.storage.get('age').then((val) => {
    console.log(val);});
    let location =  this.storage.get('location').then((val) => {
    console.log(val);});

  }

  // Closing the modal with the View Controller
  closeModal() {
    this.viewCtrl.dismiss();
  }



}
