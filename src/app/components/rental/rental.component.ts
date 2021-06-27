import { Component, OnInit } from '@angular/core';
import { RentalDto } from 'src/app/models/rentalDto';
import { RentalDetailResponseModel } from 'src/app/models/rentalDetailResponseModel';
import { RentalDetailService  } from 'src/app/services/rental-detail.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentalsDto:RentalDto[]=[]

  constructor(private rentalDetailService:RentalDetailService) { }

  ngOnInit(): void {
    this.getRentals();
  }

  getRentals(){
    this.rentalDetailService.getDetails().subscribe(response=>{
      this.rentalsDto=response.data
    });
    console.log();
  }

}
