import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  brandAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private brandService: BrandService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {this.createBrandAddForm()}

  createBrandAddForm() {
    this.brandAddForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }
  add() {
    if (this.brandAddForm.valid) {
      let brandModel = Object.assign({}, this.brandAddForm.value);
      this.brandService.add(brandModel).subscribe(
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
      console.log(this.brandAddForm);
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }
}
