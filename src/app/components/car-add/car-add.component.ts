import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Category } from 'src/app/models/category';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { CategoryService } from 'src/app/services/category.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  colors: Color[] = [];
  brands: Brand[] = [];
  categories: Category[] = [];
  selectedColor: string = 'Select Color';
  selectedBrand: string = 'Select Brand';
  selectedCategory: string = 'Select Category';
  carAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private colorService: ColorService,
    private brandService: BrandService,
    private categoryService: CategoryService,
    private carService: CarService
  ) {}

  ngOnInit(): void {
    this.getColors();
    this.getBrands();
    this.getCategories();
    this.createCarAddForm();
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
    });
  }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      colorId: [null, Validators.required],
      brandId: [null, Validators.required],
      categoryId: [null, Validators.required],
      modelYear: ['', Validators.required],
      dailyPrice: ['', Validators.required],
      description: ['', Validators.required],
      carName: ['', Validators.required],
    });
  }
  onChange(event: any) {}

  add() {
    if (this.carAddForm.valid) {
      let carModel = Object.assign({}, this.carAddForm.value);
      //console.log(carModel);
      this.carService.add(carModel).subscribe((response) => {
        if (response.success) {
          this.toastrService.success(response.message, 'Başarılı');
        }
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i <responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage
              ,"Doğrulama hatası")
          }       
        } 
      });
    } else {
      console.log(this.carAddForm);
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }
}

// [ngModel]="selectedBrand"
// [ngModelOptions]="{ standalone: true }"
// (ngModelChange)="onChange($event)"
