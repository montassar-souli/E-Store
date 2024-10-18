import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  id!: number;
  listProducts: Product[] = [
    {
      id: 1,
      name: 'iPhone 12',
      price: 1000,
      image: 'assets/images/iphone12.jpeg',
      categoryId: 1,
      description:
        'iPhone 12 with A14 Bionic chip and 6.1-inch Super Retina XDR display.',
      brand: 'Apple',
      stock: 25,
      rating: 4.8,
      discount: 10,
      releaseDate: new Date('2020-10-23'),
    },
    {
      id: 2,
      name: 'Samsung 55" 4K UHD Smart TV',
      price: 3000,
      image: 'assets/images/samsung-tv.jpeg',
      categoryId: 2,
      description:
        'Samsung 55-inch 4K UHD Smart TV with Quantum Processor 4K and HDR.',
      brand: 'Samsung',
      stock: 15,
      rating: 4.6,
      discount: 15,
      releaseDate: new Date('2021-06-15'),
    },
    {
      id: 3,
      name: 'Samsung 43" 4K UHD TV',
      price: 1000,
      image: 'assets/images/samsung-43tv.jpeg',
      categoryId: 2,
      description:
        'Samsung 43-inch 4K UHD TV with HDR support and smart features.',
      brand: 'Samsung',
      stock: 30,
      rating: 4.4,
      discount: 5,
      releaseDate: new Date('2021-05-01'),
    },
    {
      id: 4,
      name: 'iPhone 13 Pro Max',
      price: 2000,
      image: 'assets/images/iphone13pro.jpeg',
      categoryId: 1,
      description:
        'iPhone 13 Pro Max with A15 Bionic chip, 6.7-inch Super Retina XDR display, and ProMotion technology.',
      brand: 'Apple',
      stock: 20,
      rating: 4.9,
      discount: 12,
      releaseDate: new Date('2021-09-24'),
    },
    {
      id: 5,
      name: 'Dell XPS 13 Laptop',
      price: 1500,
      image: 'assets/images/dell-xps13.jpeg',
      categoryId: 3,
      description:
        'Dell XPS 13 with 11th Gen Intel Core i7, 16GB RAM, and 512GB SSD.',
      brand: 'Dell',
      stock: 10,
      rating: 4.7,
      discount: 7,
      releaseDate: new Date('2021-08-30'),
    },
    {
      id: 6,
      name: 'PlayStation 5',
      price: 500,
      image: 'assets/images/ps5.jpeg',
      categoryId: 4,
      description:
        'Sony PlayStation 5 Console with ultra-high-speed SSD and Ray Tracing support.',
      brand: 'Sony',
      stock: 8,
      rating: 4.9,
      discount: 5,
      releaseDate: new Date('2020-11-12'),
    },
    {
      id: 7,
      name: 'Apple Watch Series 7',
      price: 400,
      image: 'assets/images/apple-watch7.jpeg',
      categoryId: 1,
      description:
        'Apple Watch Series 7 with always-on Retina display, ECG app, and blood oxygen sensor.',
      brand: 'Apple',
      stock: 18,
      rating: 4.5,
      discount: 10,
      releaseDate: new Date('2021-10-15'),
    },
    {
      id: 8,
      name: 'Nike Air Max 270',
      price: 150,
      image: 'assets/images/nike-airmax270.jpeg',
      categoryId: 5,
      description:
        'Nike Air Max 270 shoes with an oversized Air unit for all-day comfort.',
      brand: 'Nike',
      stock: 50,
      rating: 4.4,
      discount: 20,
      releaseDate: new Date('2020-03-01'),
    },
    {
      id: 9,
      name: 'Bose QuietComfort 35 II Headphones',
      price: 300,
      image: 'assets/images/bose-qc35.jpeg',
      categoryId: 6,
      description:
        'Bose noise-cancelling wireless headphones with Alexa voice control and premium sound.',
      brand: 'Bose',
      stock: 22,
      rating: 4.8,
      discount: 15,
      releaseDate: new Date('2019-05-10'),
    },
    {
      id: 10,
      name: 'Canon EOS R5 Camera',
      price: 3900,
      image: 'assets/images/canon-eosr5.jpeg',
      categoryId: 7,
      description:
        'Canon EOS R5 mirrorless camera with 45MP full-frame sensor and 8K video recording.',
      brand: 'Canon',
      stock: 12,
      rating: 4.9,
      discount: 8,
      releaseDate: new Date('2020-07-30'),
    },
  ];

  constructor(private activated: ActivatedRoute) {
    this.id = this.activated.snapshot.params['id'];
    this.listProducts = this.listProducts.filter(
      (p) => p.categoryId == this.id
    );
    console.log(this.activated.snapshot.params);
  }
}
