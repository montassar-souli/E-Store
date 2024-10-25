import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  constructor(private cs:CategoryService) {
    this.categories = cs.categories;
    this.listCategoryFiltred = this.categories;
  }

  searchText: string = '';
  categories: Category[] = []
  onChangeInput(event: Event) {
    alert((event.target as HTMLInputElement).value);
  }
  listCategoryFiltred: Category[] = this.categories;
  searchCategory() {
    this.listCategoryFiltred = [];
    this.categories.forEach((element) => {
      if (element.name.toLowerCase().includes(this.searchText.toLowerCase())) {
        this.listCategoryFiltred.push(element);
      }
    });
  }
}
