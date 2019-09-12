# IntiveFdvFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Notas extras

## Reglas de estilado
En https://github.com/stylelint/stylelint-config-recommended recomienda en:
* unit-whitelist: [em, rem, s] -> en cambio pusimos % y px por lo que a veces suele usarse, pero tambien se podria configurar que px y % solo se pueda usar en casos especiales..
* o-empty-source: Por defecto es true, pero como angular crea los archivos por defecto cambiamos a null

## Incorporacion de Husky
* Comenta que si en un repo hay varios package.json recomienda usar https://github.com/lerna/lerna, ya que al instalar huysky pone unos archiovs en el .git ( https://github.com/typicode/husky )