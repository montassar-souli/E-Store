import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddProductComponent } from './add-product/add-product.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'listCategotie',
    component: CategoriesComponent,
  },
  {
    path: 'products/:id',
    component: ProductsComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'category/add',
    component: AddCategoryComponent,
  },
  {
    path: 'product/add',
    component: AddProductComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
