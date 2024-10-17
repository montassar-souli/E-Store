1- ng new E-Store --skip-tests
2- npm i bootstrap
configure angular.json file "build"
            "styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": ["node_modules/bootstrap/dist/js/bootstrap.js"]
3- ng g c navbar --standalone
-- add NavbarComponent to imports in app.module.ts
-- add RouterModule to imports in navbar.components.ts

4-ng g c categories
-- mkdir src/app/models
-- touch src/app/models/category.ts
-- add FormsModule to imports in app.module.ts(input'ngModel')
4- ng c products

ng g c home
ng g c footer


touch product.ts
