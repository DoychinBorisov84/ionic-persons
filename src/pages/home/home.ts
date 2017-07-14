import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { reorderArray } from 'ionic-angular';
import { EmployeeDetailsPage } from '../employee-details/employee-details';
import { EmployeesProvider } from '../../providers/employees/employees';
import { AddUserPage } from '../add-user/add-user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public employees: EmployeesProvider) {


  }
  ionViewDidLoad(){
  }
  // Get current employeeeClicked creating an object with the data for it. Next create modal.popUp(PageForModalView, {parameterObject} passed to the modal. Next present the modal)
    showDetails(single_employee)
    {
      // array of information of the SELECTED employee
      let employee = {name: single_employee.name, title: single_employee.title, age: single_employee.age, location: single_employee.location};

      // let data = {name: 'Djiombo', title: 'Sir'};
      // this.navCtrl.push(EmployeeDetailsPage, data);

      // passing data-object with the creating modal-popup into our EmployyesDetailsPage
     let modal = this.modalCtrl.create(EmployeeDetailsPage, {employee});
        // modal.onDidDismiss((data)=>{console.log(data);} );
     modal.present();
    }

    // Adding user using modal to page AddUserPage
    addUser() {
      let modal = this.modalCtrl.create(AddUserPage);
      modal.present();
    }


}
