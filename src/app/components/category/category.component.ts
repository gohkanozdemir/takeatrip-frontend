import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  currentCategory: Category;
  checked: string= "";
  

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
    });
  }

  setCurrentCategory(category: Category) {
    this.currentCategory = category 
  }

  onCheckboxChange(event: any, category: Category){
    if (event.target.checked) {
      this.checked = "active";
    } else {
      this.checked = "";
    }
  }

  getCurrentCategoryClass(category: Category){
    if(category == this.currentCategory){
      return "list-group-item list-group-item-action list-group-item-primary"
    }
    else{
      return "list-group-item list-group-item-action list-group-item-light"
    }
  }

  getAllCategoryClass(){
    if(!this.currentCategory){
      //this.currentCategory
      return "list-group-item active" 
    }else{
      return "list-group-item"
    }
  }
}
