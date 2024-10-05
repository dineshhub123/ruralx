// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
     
    //apiUrl: 'http://localhost/search_product.php',
    //apiUrl: 'https://tsoliteuat.tradesmartonline.in/api/v5_uat/public/',
    //apiUrl: 'http://localhost/employee.php',
    
    employeeApiURL: 'http://localhost/employee_product.php',
   // searchApiUrl: 'http://localhost/search_product.php',
    mobileApiUrl: 'http://localhost/mobile_product.php',
    electronicApiUrl:'http://localhost/electronic_product.php',
    fashionApiUrl: 'http://localhost/fashion_product.php',
    groceryApiUrl: 'http://localhost/grocery_product.php',
    bestsellerApiURL: 'http://localhost/bestseller_product.php',
    clothApiUrl: 'http://localhost/cloth_product.php',
    todaydealApiUrl: 'http://localhost/todaydeal_product.php',
    coustomerApiUrl: 'http://localhost/coustomer_product.php',
    newreleaseApiUrl: 'http://localhost/newrelease_product.php',

    searchApiUrl: 'http://192.168.249.250/search_product.php',
   // apiUrl: 'http://192.168.89.68/search_product.php',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
