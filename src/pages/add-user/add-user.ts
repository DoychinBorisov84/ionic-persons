import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@IonicPage()

@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})
export class AddUserPage {

  // Declaring Variables to take  the users input fields using [(ngModel)]
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
    // Taking the users input as an object-newUser using the  [(two-way-binding)]. Creating object->newUser->for passing as param
    let newUser = {
      name: this.name,
      title: this.title,
      age: this.age,
      location: this.location
     }
    //  Passing our object with data-input as param on dismiss
    this.viewCtrl.dismiss(newUser);
  }

  // Closing the modal with the View Controller on click "Dismiss"-btn
  closeModal() {
    this.viewCtrl.dismiss();
  }

}
