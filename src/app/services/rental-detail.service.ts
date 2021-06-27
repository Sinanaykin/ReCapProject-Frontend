import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailResponseModel } from 'src/app/models/rentalDetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailService {

  apiUrl = "https://localhost:44304/api/rentals/getrentaldetails";


  constructor(private httpClient : HttpClient) { }

  getDetails() : Observable<RentalDetailResponseModel>{
    return this.httpClient
      .get<RentalDetailResponseModel>(this.apiUrl)
  }
}
