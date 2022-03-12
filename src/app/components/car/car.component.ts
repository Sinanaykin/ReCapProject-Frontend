import { Component, OnInit } from '@angular/core';

import { CarService } from 'src/app/services/car.service';
import { CarDto } from 'src/app/models/carDto';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { Car } from 'src/app/models/car';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {


  carsDto: CarDto[]=[]
  currentCar:CarDto
  carImages:CarImage[];
  carId:number=1;
  car !: Car;
  imgUrl:string="https://localhost:44304/"
  defaultImage="images/logo.png";

  dataLoaded=false;

  constructor(
    private  CarDetailService:CarDetailService ,
    private CarImageService:CarImageService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {


     // bu aslında c# daki public void NgOnIt() metodu gibi burda syntax farklı ondan böyle yazıyoruz
     this.activatedRoute.params.subscribe(params=>{//activatedRoute a gidip categoryId verilmişmi ona bakıcaz
      this.getCarImagesByCarId(params["carId"]);
      if (params["brandId"]) {//eğer brand si varsa
        this.getCarsByBrand(params["brandId"]) //getCarsByBrand bu metodu çalıştır içinede params ın brandId sini yolla
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])

      }
      else{
        this.getDetails()//eğer brandId yoksa getDetails i çalıştır diyoruz burdada
      }
    })


  }

    setCurrentCar(car:CarDto){
      this.currentCar=car;

    }

    getDetails(){
      this.CarDetailService.getDetails().subscribe(response => {
        this.carsDto = response.data;
        this.dataLoaded = true;
      });
    }

    getCarsByColor(colorId:number) {
      this.CarDetailService.getCarsByColor(colorId).subscribe(response=>{ //productService deki getProducts  a  response için productsa respondan gelen datayı getirir.Subscribe kullanımı ile  içindeki şeyleri sıralı çalışmasını sağlar asekron sekron olayı
        this.carsDto=response.data
        this.dataLoaded=true;//veri yüklenince true yapıyoruz
      });
      console.log();
     }

     getCarsByBrand(brandId:number) {
      this.CarDetailService.getCarsByBrand(brandId).subscribe(response=>{ //productService deki getProducts  a  response için productsa respondan gelen datayı getirir.Subscribe kullanımı ile  içindeki şeyleri sıralı çalışmasını sağlar asekron sekron olayı
        this.carsDto=response.data
        this.dataLoaded=true;//veri yüklenince true yapıyoruz
      });
      console.log();
     }
     getCarImagesByCarId(carId: number) {

      this.CarImageService.getCarImagesByCarId(carId).subscribe((response) => {
        this.carImages = response.data;

      });
    }


}
