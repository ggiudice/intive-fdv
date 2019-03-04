// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  config: {
    locale: 'en',
    apiUrl:  'http://localhost:8000',
    apiUrlCountry: 'https://restcountries.eu/rest/v2/all'
  }
};

