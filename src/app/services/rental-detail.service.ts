import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDto } from '../models/rentalDto';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailService {

  apiUrl = "https://localhost:44304/api/rentals/getrentaldetails";


  constructor(private httpClient : HttpClient) { }

  getDetails() : Observable<ListResponseModel<RentalDto>>{
    return this.httpClient
      .get<ListResponseModel<RentalDto>>(this.apiUrl)
  }
}
