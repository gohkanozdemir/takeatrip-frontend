import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  currentBrand: Brand;
  constructor(private brandServise: BrandService) {}

  ngOnInit(): void {
    this.getBrands();
  }
  getBrands() {
    this.brandServise.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }

  setCurrentBrand(brand: Brand) {
    this.currentBrand = brand;
  }

  onCheckboxChange(event: any, brand: Brand){
    if (event.target.checked) {
      console.log("checked" + brand.id)
    } else {
      console.log("unchecked"+ brand.id)
    }
  }

  getCurrentBrandClass(brand: Brand){
    if(brand == this.currentBrand){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }

  getAllBrandClass(){
    if(!this.currentBrand){
      //this.currentCategory
      return "list-group-item active" 
    }else{
      return "list-group-item"
    }
  }
}
