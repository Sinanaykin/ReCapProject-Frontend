import { Component, OnInit } from '@angular/core';
import { CarDto } from 'src/app/models/carDto';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';


@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors: Color[]=[];
  cars: CarDto[]=[];
  currentColor:Color;

  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors = response.data
    });
    console.log();
  }


  setCurrentColor(color:Color){
    this.currentColor=color;

  }


  setAllColor(){
    this.getColors();
  }

  getCurrentColorClass(color:Color){
    if (color==this.currentColor)//benim categoryim seçilen categorye eşitse onu active yapıcaz
    {
      return "list-group-item active" //eşitse active yaptık
    }else{
      return "list-group-item "  //eşit değilse active olmayan yaptık
    }
  }

  getAllColorClass(){
    if (!this.currentColor)//eğer benim categoryim yoksa
    {
      return "list-group-item active" //bu active olsun
    }else{
      return "list-group-item "  //eşit değilse active olmayan yaptık
    }
  }



}
