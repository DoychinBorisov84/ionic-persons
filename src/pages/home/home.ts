import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { reorderArray } from 'ionic-angular';
import { EmployeeDetailsPage } from '../employee-details/employee-details';
import { AddUserPage } from '../add-user/add-user';
import { Storage } from '@ionic/storage';
import { UserDetailPage } from '../user-detail/user-detail';
import { EmployeesProvider } from '../../providers/employees/employees';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //  puyblic array to store locally our users
  public newUsers = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public employees: EmployeesProvider, public storage: Storage) {

//Setting up our Provider EmployeesProvider we will use for permanent storage of our employees. It should be in the constructor for initial load
    this.employees.getData().then((data) => {

      if(data){
        this.newUsers = JSON.parse(data);
      }
    });
    //

  }
  ionViewDidLoad(){
  }

    // Adding user using modal to page AddUserPage. Using modals is better option IF we need data back on dismiss()
  addUser() {
      // Creating the modal with our page
    let modal = this.modalCtrl.create(AddUserPage);
      // passing data on dismissing the modal(newUser) in AddUserPage
    modal.onDidDismiss((newUser) => {
      // If the data is passed use saveUser(with data)
        if(newUser){
          this.saveUser(newUser);
        }
    });
    // Present the page/modal view
    modal.present();
  }

    // Method with (parameter) to .push(parameter) into our object
  saveUser(newUser){
    this.newUsers.push(newUser);
    this.employees.saveData(this.newUsers);
  }

    // Showing details for the clicked user. We pass the (user)->when we click and using the navCtrl.push(Page, parameter) we pass the object to the UserDetailsPage as a parameter. Here we pass an OBJECT-user
  showDetails(user){
    this.navCtrl.push(UserDetailPage, {currentUser: user});
  }

}
