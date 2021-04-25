import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors: Color[]= [];
  currentColor: Color;
  isChecked: string= "";

  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
      //console.log(JSON.stringify(this.colors) )
    });
  }

  setCurrentColor(color: Color) {
    this.currentColor = color;
  }

  onCheckboxChange(event: any, color: Color){
    if (event.target.checked) {
    } else {
    }
  }

  getCurrentColorClass(color: Color){
    if(color == this.currentColor){
      this.isChecked="checked"
      return "list-group-item list-group-item-action list-group-item-primary active"
    }
    else{
      this.isChecked=""
      return "list-group-item list-group-item-action list-group-item-light"
    }
  }

  getAllColorClass(){
    if(!this.currentColor){
      this.isChecked="checked"
      return "list-group-item active" 
    }else{
      return "list-group-item"
    }
  }
}
