import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EmployeeDetailsPage } from '../pages/employee-details/employee-details';
import { HttpModule } from '@angular/http';
import { EmployeesProvider } from '../providers/employees/employees';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';
import { AddUserPage } from '../pages/add-user/add-user';
import { UserDetailPage } from '../pages/user-detail/user-detail';


const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '018c8cca'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EmployeeDetailsPage,
    AddUserPage,
    UserDetailPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
     CloudModule.forRoot(cloudSettings),
      IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EmployeeDetailsPage,
    AddUserPage,
    UserDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmployeesProvider, Geolocation
  ]
})
export class AppModule {}
