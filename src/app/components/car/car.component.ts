import { Component, OnInit } from '@angular/core';

import { CarService } from 'src/app/services/car.service';
import { CarDto } from 'src/app/models/carDto';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { Car } from 'src/app/models/car';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {


  carsDto: CarDto[]=[]
  currentCar:CarDto

  dataLoaded=false;

  constructor(private  CarDetailService:CarDetailService , private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
     // bu aslında c# daki public void NgOnIt() metodu gibi burda syntax farklı ondan böyle yazıyoruz
     this.activatedRoute.params.subscribe(params=>{//activatedRoute a gidip categoryId verilmişmi ona bakıcaz
      if (params["brandId"]) {//eğer categoryId si varsa
        this.getCarsByBrand(params["brandId"]) //getProductsByCategory bu metodu çalıştır içinede params ın categoryId sini yolla
      }
      else if(params["colorId"]){
        this.getCarsByColor(params["colorId"])

      }
      else{
        this.getDetails()//eğer categoryId yoksa getProducts i çalıştır diyoruz burdada
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
      console.log();
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


}
