import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HomePage} from '../home/home';
import { EmployeesProvider } from '../../providers/employees/employees';
import { Geolocation } from '@ionic-native/geolocation';

// Global variable google escaping errors TS, Also to use MAPS we need ViewChild, ElementRef import
declare var google;

@IonicPage()

@Component({
  selector: 'page-employee-details',
  templateUrl: 'employee-details.html',
})
export class EmployeeDetailsPage {

  // Object of type any we use to pass the navParams.get('parameterFromHomePage') passed with modal.create
  object: any;

//  Using view child to access #map in html
  @ViewChild('map') mapElement: ElementRef;
 map: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public employees: EmployeesProvider, public geolocation: Geolocation) {

  // assigning this.object to take the current.param we take from the click in home page list
  this.object =  this.navParams.get('employee');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeeDetailsPage');
    // console.log(this.navParams.get('name'));
    console.log(this.navParams.get('employee'));

    // loadMap() after initial load
     this.loadMap();
  }

 // Using the closeModal(click) and dismiss()->modal to exit the modal
  closeModal(){
    // let data = {game: 'lego'};
    // console.log(this.employees.username);
     this.viewCtrl.dismiss();
  }


  // using native googlemaps to load the Map
  loadMap(){

   this.geolocation.getCurrentPosition().then((position) => {

    //  Object with current positon
     let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    //  Object with info for the map
     let mapOptions = {
       center: latLng,
       zoom: 10,
       mapTypeId: google.maps.MapTypeId.TERRAIN
     }

     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

   }, (err) => {
     console.log(err);
   });

 }

 // (click) button Add Marker
 addMarker(){
  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
  });

  let content = "<h4>Information!</h4>";

  this.addInfoWindow(marker, content);

}

// Using Marker by Google for adding locations
addInfoWindow(marker, content){

  let infoWindow = new google.maps.InfoWindow({
    content: content
  });

  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
  });
}



}
