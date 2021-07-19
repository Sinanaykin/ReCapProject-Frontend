import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerDto } from '../models/customerDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailService {

  apiUrl = "https://localhost:44304/api/customers/getcustomerdetails";

  constructor(private httpClient : HttpClient) { }

  getDetails() : Observable<ListResponseModel<CustomerDto>>{
    return this.httpClient
      .get<ListResponseModel<CustomerDto>>(this.apiUrl)
  }
}
