import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
import { CarDto } from 'src/app/models/carDto';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[]=[];
  cars: CarDto[]=[];
  currentBrand:Brand;


  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands = response.data
    });


  }




  setAllBrand(){
    this.getBrands();
  }
  getAllBrandClass(){
    if (!this.currentBrand)//eğer benim categoryim yoksa
    {
      return "list-group-item active" //bu active olsun
    }else{
      return "list-group-item "  //eşit değilse active olmayan yaptık
    }
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;

  }

  getCurrentBrandClass(brand:Brand){
    if (brand==this.currentBrand)//benim categoryim seçilen categorye eşitse onu active yapıcaz
    {
      return "list-group-item active" //eşitse active yaptık
    }else{
      return "list-group-item "  //eşit değilse active olmayan yaptık
    }
  }


}
