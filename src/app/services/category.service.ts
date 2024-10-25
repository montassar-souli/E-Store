import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: Category[] = [
    {
      id: 1,
      name: 'Phones',
      available: true,
      image: 'assets/images/category/phones.jpg',
    },
    {
      id: 2,
      name: 'Televisions',
      available: true,
      image: 'assets/images/category/televisions.jpg',
    },
    {
      id: 3,
      name: 'Laptops',
      available: true,
      image: 'assets/images/category/laptops.jpg',
    },
    {
      id: 4,
      name: 'Gaming Consoles',
      available: true,
      image: 'assets/images/category/gaming-consoles.jpg',
    },
    {
      id: 5,
      name: 'Headphones & Audio',
      available: true,
      image: 'assets/images/category/headphones-audio.jpg',
    },
    {
      id: 6,
      name: 'Cameras & Photography',
      available: true,
      image: 'assets/images/category/cameras-photography.jpg',
    },
    {
      id: 7,
      name: 'Accessories',
      available: true,
      image: 'assets/images/category/accessories.jpg',
    },
    {
      id: 8,
      name: 'Keyboards & Mice',
      available: false,
      image: 'assets/images/category/keyboards-mice.jpg',
    },
  ];

  constructor() {}

  getCategories() {
    return this.categories;
  }
  addCategory(category:Category){
    this.categories.push(category);
  }
}
