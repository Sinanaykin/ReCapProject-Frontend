import { Component, OnInit } from '@angular/core';
import { CustomerDto } from 'src/app/models/customerDto';
import { CustomerDetailService } from 'src/app/services/customer-detail.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customersDto:CustomerDto[]=[]



  constructor(private customerDetailService:CustomerDetailService) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails(){
    this.customerDetailService.getDetails().subscribe(response=>{
      this.customersDto=response.data
    });
    console.log();
  }
}
