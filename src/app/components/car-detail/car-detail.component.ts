import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDto';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';



@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails:CarDto;
  currentDetail: Car;
  imgUrl:string="https://localhost:44304/"
  carId:number;


  constructor(private carDetailService:CarDetailService, private carImageService:CarImageService, private activateRoute:ActivatedRoute) { }

  dataLoaded=false;

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.carId=params['carId'];
        this.getCarDetailById(params['carId']);

      }
    });


  }

  getCarDetailById(carId: number) {
    this.carDetailService.getcardetailbyid(carId).subscribe((response) => {
      this.carDetails = response.data;
      this.getCarImages();
    });
  }

  getCarImages(){
    this.carImageService.getCarImagesByCarId(this.carId).subscribe((response)=>{
      this.carDetails.carImage = response.data;
      this.dataLoaded=true
    })
  }






  }
