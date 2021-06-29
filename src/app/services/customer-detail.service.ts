import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerDetailResponseModel } from 'src/app/models/customerDetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailService {

  apiUrl = "https://localhost:44304/api/customers/getcustomerdetails";

  constructor(private httpClient : HttpClient) { }

  getDetails() : Observable<CustomerDetailResponseModel>{
    return this.httpClient
      .get<CustomerDetailResponseModel>(this.apiUrl)
  }
}
