import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDto } from '../models/carDto';
import { EntityResponseModel } from '../models/entityResponseModel';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl='https://localhost:44304/api/';

  constructor(private httpClient:HttpClient) { }

getDetails():Observable<ListResponseModel<CarDto>>{
  let newPath=this.apiUrl + "cars/getall"
  return this.httpClient.get<ListResponseModel<CarDto>>(newPath)
}

getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDto>> {//Eğer categoryId gelirse getProductsmetodunu değilde getProductsByCategory metodunu çalıştır demek için bu metoduda ekledik
  let newPath=this.apiUrl + "cars/getcarsbybrandid?brandId="+brandId;
  return this.httpClient.get<ListResponseModel<CarDto>>(newPath);//newPath adında bir şey tanımladık burayada yol verdilk bunu yukarıdaki api Url nin devamında kullanıcaz şartlar sağlanırsa,newPath i buraya vermeliyiz
 }

 getCarsByColor(colorId:number):Observable<ListResponseModel<CarDto>> {//Eğer categoryId gelirse getProductsmetodunu değilde getProductsByCategory metodunu çalıştır demek için bu metoduda ekledik
  let newPath=this.apiUrl + "cars/getcarsbycolorid?colorId="+colorId;
  return this.httpClient.get<ListResponseModel<CarDto>>(newPath);//newPath adında bir şey tanımladık burayada yol verdilk bunu yukarıdaki api Url nin devamında kullanıcaz şartlar sağlanırsa,newPath i buraya vermeliyiz
 }


 getcardetailbyid(id: number): Observable<EntityResponseModel<CarDto>> {
  let newPath = this.apiUrl + "cars/getcardetails?id="+id;
  return this.httpClient.get<EntityResponseModel<CarDto>>(newPath);
}

}
