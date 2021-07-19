
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarımageService {

  apiUrl="https://localhost:44304/api/";

  constructor(private httpClient:HttpClient) { }

  getAllImage():Observable<ListResponseModel<CarImage>>
  {
    let newPath=this.apiUrl+"carImage/getall";
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  };


  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>
  {
    let newPath=this.apiUrl+"carImage/getimagebycarid?id="+carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  };



}
