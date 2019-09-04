import { Injectable } from '@angular/core';
import { AppConstants } from './Classes/AppConstants';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private appConstants: AppConstants,
    private http: HttpClient) { }


  getProducts() {
    console.log('oooi geni')

  }

  dataReq(): any {

    let body = {
      "tags": ["Anlg1.out", "Anlg2.out", "Anlg3.out"],
      "plc": this.appConstants.plc1
    }

    return new Promise((resolve, reject) => {
      this.http.post(this.appConstants.url + "/direct/getValues",
        body,
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          }
        }).subscribe(res => {

          resolve(res)
        }, err => {
          resolve(err)
        });
    });
  }


}

