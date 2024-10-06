// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  //apiUrl: 'http://localhost/search_product.php',
  //apiUrl: 'https://tsoliteuat.tradesmartonline.in/api/v5_uat/public/',
  //apiUrl: 'http://localhost/employee.php',

  //getUserDetailsApiURL: 'http://localhost/getUserLoginDetails.php',
  // searchApiUrl: 'http://localhost/search_product.php',
  //uploadDataApiUrl: 'http://localhost/userdatabase.php',
  //insertUserDetailsApiUrl: 'http://localhost/insertUserDetailsData.php',

  getUserDetailsApiURL: 'http://192.168.249.250/getUserLoginDetails.php',
  searchApiUrl: 'http://192.168.249.250/search_product.php',
  uploadDataApiUrl: 'http://192.168.249.250/userdatabase.php',
  insertUserDetailsApiUrl: 'http://192.168.249.250/insertUserDetailsData.php',

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
