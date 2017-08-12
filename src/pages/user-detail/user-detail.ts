import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { HomePage} from '../home/home';

declare var google;

@IonicPage()

@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html',
})
export class UserDetailPage {
  // Object of type any we use to pass the navParams.get('parameterFromHomePage') passed with modal.create
  object: any;

//  Using view child to access #map in html
  @ViewChild('map') mapElement: ElementRef;
 map: any;


// Our variables to take the navParams send by the current.clicked.user: name, age....
  name;
  title;
  age;
  location

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public geolocation: Geolocation, ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailPage');
    // Assigning when we load the page : our variables to take the current user.object.parameters
    this.name = this.navParams.get('currentUser').name;
    this.title = this.navParams.get('currentUser').title;
    this.age = this.navParams.get('currentUser').age;
    this.location = this.navParams.get('currentUser').location;

    this.loadMap();
  }

  // Closing the view using the ViewController.dismmiss()
  closeModal(){
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

     let content = "<h4>You are Here!</h4>";
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
