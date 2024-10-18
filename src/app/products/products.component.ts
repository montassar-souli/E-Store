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
      image: 'assets/images/product/iphone12-purple.jpg',
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
      image: 'assets/images/product/samsung-55.jpg',
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
      image: 'assets/images/product/samsung-43.png',
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
      image: 'assets/images/product/iphone13-pro-maxGold.jpg',
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
      image: 'assets/images/product/dell13.jpg',
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
      image: 'assets/images/product/ps5.jpg',
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
      image: 'assets/images/product/Apple-Watch-Series.png',
      categoryId: 7,
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
      name: 'Beats Solo3',
      price: 150,
      image: 'assets/images/product/beats-solo3.png',
      categoryId: 5,
      description:
        'Beats Solo3 Wireless in-ear headphones immerse you in rich award-winning sound wherever you want to go.',
      brand: 'Beats',
      stock: 50,
      rating: 4.4,
      discount: 20,
      releaseDate: new Date('2020-03-01'),
    },
    {
      id: 9,
      name: 'Bose QuietComfort 35 II Headphones',
      price: 300,
      image: 'assets/images/product/bose.jpg',
      categoryId: 5,
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
      name: 'Canon g7x',
      price: 3900,
      image: 'assets/images/product/canon-g7x.jpg',
      categoryId: 6,
      description:
        'Canon PowerShot G7X marks Canon return to the credible competition of expert compacts. Equipped with the 1-inch sensor that equips all RX100s, it is equipped with very bright optics, a 24-100 mm f/1.8-2.8. Its zoom extension gives it an advantage over the RX100 Mark III, but it has fewer features and it doesnt have a built-in viewfinder.',
      brand: 'Canon',
      stock: 12,
      rating: 4.9,
      discount: 8,
      releaseDate: new Date('2020-07-30'),
    },
    {
      id: 11,
      name: 'Canon EOS R5 Mirrorless Camera',
      price: 3899,
      image: 'assets/images/product/canon.png',
      categoryId: 6,
      description:
        'Canon EOS R5 Mirrorless Camera with 45MP full-frame sensor, 8K video recording, and advanced autofocus features.',
      brand: 'Canon',
      stock: 15,
      rating: 4.9,
      discount: 5,
      releaseDate: new Date('2020-07-30'),
    },
    {
      id: 12,
      name: 'Huawei P40 Pro',
      price: 999,
      image: 'assets/images/product/huawei.jpg',
      categoryId: 1,
      description:
        'Huawei P40 Pro with a 50MP Ultra Vision camera, 6.58-inch OLED display, and Kirin 990 5G chip.',
      brand: 'Huawei',
      stock: 18,
      rating: 4.6,
      discount: 10,
      releaseDate: new Date('2020-03-26'),
    },
    {
      id: 13,
      name: 'Redmi Note 10 Pro',
      price: 299,
      image: 'assets/images/product/redmi.jpg',
      categoryId: 1,
      description:
        'Redmi Note 10 Pro with a 108MP quad-camera, 6.67-inch AMOLED display, and 5020mAh battery.',
      brand: 'Redmi',
      stock: 40,
      rating: 4.4,
      discount: 5,
      releaseDate: new Date('2021-03-04'),
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
