import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  category:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required, Validators.minLength(3),Validators.nullValidator]),
    available:new FormControl(''),
    image:new FormControl(''),
  });
}
