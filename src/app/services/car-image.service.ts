
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDto } from '../models/carDto';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl="https://localhost:44304/api/";

  constructor(private httpClient:HttpClient) { }

  getAllImage():Observable<ListResponseModel<CarImage>>
  {
    let newPath=this.apiUrl+"carImage/getall";
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  };


  getCarImagesByCarId(Id:number):Observable<ListResponseModel<CarImage>>
  {
    let newPath=this.apiUrl+"carimages/getcarimagesbycarid?Id="+Id;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  };


  getİmagesByCarId(carId : number) : Observable<ListResponseModel<CarDto>>{
    let newPath = this.apiUrl + "cars/getcarimagebycarid?id=" + carId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
}


































































































































































}
