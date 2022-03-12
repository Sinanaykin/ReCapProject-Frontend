import { CarImage } from "./carImage";

export interface CarDto{
  carId : number;
  colorName : string;
  brandName : string;
  modelYear:number;
  carName:string;
  dailyPrice : number;
  brandId:number;
  description:string;
  carImage:CarImage[];
  imagePath:string;


}
