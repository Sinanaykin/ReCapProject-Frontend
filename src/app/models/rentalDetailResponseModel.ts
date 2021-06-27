
import { RentalDto } from "./rentalDto";
import { ResponseModel } from "./responseModel";

export interface RentalDetailResponseModel extends ResponseModel{
    data: RentalDto[]
}
