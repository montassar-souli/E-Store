1- ng new E-Store --skip-tests
2- npm i bootstrap
configure angular.json file "build"
"styles": [
"src/styles.css",
"node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": ["node_modules/bootstrap/dist/js/bootstrap.js"]
3- ng g c home
4- ng g c footer
4- ng g c navbar --standalone
-- add NavbarComponent to imports in app.module.ts
-- add RouterModule to imports in navbar.components.ts

5-ng g c categories
-- mkdir src/app/models
-- touch src/app/models/category.ts
-- add FormsModule to imports in app.module.ts(two way databinding'ngModel')
6- ng g c products
7- ng g c profile
8- ng g c notFound
9- ng g c addCategory

10-configure routes in app-routing.module.ts

11- -- touch src/app/models/products.ts


touch product.ts
