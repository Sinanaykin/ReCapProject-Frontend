import { CarDto } from "./carDto";
import { ResponseModel } from "./responseModel";

export interface CarDetailResponseModel extends ResponseModel{
    data: CarDto[];
}
