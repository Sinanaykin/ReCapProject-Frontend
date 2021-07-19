import { ResponseModel } from "./responseModel";

export interface EntityResponseModel <T> extends ResponseModel{//ResponseModeldeki veriler gelsin diye buraya onuda belirtiyoruz
  data :T;
}

//Gelen tek nesne için responsemodel yoktu o yüzden bunu da ekledik dizi dönmeyen
