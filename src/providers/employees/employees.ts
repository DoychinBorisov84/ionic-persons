import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Injectable()

export class EmployeesProvider {

  constructor(public http: Http, public storage: Storage) {
    console.log('Hello EmployeesProvider Provider');
  }

  getData() {
    return this.storage.get('employees');
  }

  saveData(data) {
    let newData = JSON.stringify(data);
    this.storage.set('employees', newData);

  }

}
