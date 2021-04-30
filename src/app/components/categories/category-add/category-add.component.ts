import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  categoryAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {this.createColorAddForm()}

  createColorAddForm() {
    this.categoryAddForm = this.formBuilder.group({
      categoryName: ['', Validators.required],
    });
  }
  add() {
    if (this.categoryAddForm.valid) {
      let categoryModel = Object.assign({}, this.categoryAddForm.value);
      this.categoryService.add(categoryModel).subscribe(
        (response) => {
          if (response.success == true) {
            this.toastrService.success(response.message, 'Başarılı');
          }
        },
        (resError) => {
          this.toastrService.error(resError.message, 'islem Başarısiz');
        }
      );
    } else {
      console.log(this.categoryAddForm);
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }

}
