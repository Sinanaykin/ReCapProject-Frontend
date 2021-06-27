import { Component, OnInit } from '@angular/core';
import { CarResponseModel } from 'src/app/models/carResponseModel';
import { CarService } from 'src/app/services/car.service';
import { CarDto } from 'src/app/models/carDto';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { Car } from 'src/app/models/car';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {


  carsDto: CarDto[]=[]

  dataLoaded=false;

  constructor(private  CarDetailService:CarDetailService) { }

  ngOnInit(): void {

    this.getDetails();
  }


    getDetails(){
      this.CarDetailService.getDetails().subscribe(response => {
        this.carsDto = response.data;

        this.dataLoaded = true;
      });
      console.log();
    }


}
