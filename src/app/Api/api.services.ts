// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../Classes/AppConstants';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient,
        private appConstants: AppConstants) { }

    getProducts() {
        console.log('oooi geni')

    }



}