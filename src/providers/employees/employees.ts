import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeesProvider {
// Our HARDCODED-Data in the MODALl we take so we can use it in our pages, presented like an array of Objects
employees_array = [
  {name: 'Doychin', title: 'Web Developer', age: 33, location: 'Bulgaria'},
  {name: 'Miguel', title: 'Footballer', age: 22, location: 'Spain'},
  {name: 'Ronda', title: 'Fighter', age: 26, location: 'USA'},
  {name: 'Jane', title: 'Writer', age: 44, location: 'Canada'},
  {name: 'The Rock', title: 'Wrestler', age: '38', location: 'USA'}
];

  constructor(public http: Http) {
    console.log('Hello EmployeesProvider Provider');
  }

}
