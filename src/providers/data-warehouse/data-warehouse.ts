import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

// USING DYNAMIC STORAGE TO STORE DATA FROM THE HOME PAGE

@Injectable()
export class DataWarehouseProvider {

  constructor(public http: Http, public storage: Storage) {
    console.log('Hello DataWarehouseProvider Provider');
  }

  getData() {
     return this.storage.get('todos');
   }

   save(data){
     let newData = JSON.stringify(data);
     this.storage.set('todos', newData);
   }

}
