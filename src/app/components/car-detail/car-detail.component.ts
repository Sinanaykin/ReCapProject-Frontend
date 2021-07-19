import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDto';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';



@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails:CarDto;
  currentDetail: Car;


  constructor(private carDetailService:CarDetailService, private activateRoute:ActivatedRoute) { }

  dataLoaded=false;

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetailById(params['carId']);

      }
    });


  }

  getCarDetailById(carId: number) {
    this.carDetailService.getcardetailbyid(carId).subscribe((response) => {
      this.carDetails = response.data;
      this.dataLoaded=true

    });
  }






  }
