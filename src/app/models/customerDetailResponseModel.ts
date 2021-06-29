
import { CustomerDto } from "./customerDto";
import { ResponseModel } from "./responseModel";

export interface CustomerDetailResponseModel extends ResponseModel{
    data: CustomerDto[]
}
