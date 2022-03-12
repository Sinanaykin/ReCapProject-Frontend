import { CarImage } from "./carImage";

export interface Car{
  carId:number;
  brandId:number;
  colorId:number;
  carName:string;
  modelYear:number;
  dailyPrice:number;
  description:string;
  carImage: CarImage[];


}
