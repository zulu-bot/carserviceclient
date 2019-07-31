# CarServiceClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

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
<<<<<<< HEAD
=======


## Descripcion

Se genero un servicio owners para las funciones asiciadas a la api owners.
Se modifico el componente car-list, importando el servicio owners, para mostrar el nombre de un el usuario asociado como owner de cada vehiculo.
Se modifico el componente car-edit importando el servicio owners y añadiendo un elemento select el cual permite asociar un cliente ya existente como owner del vehiculo.
Se genero un componente owner-list que utiliza el servicio owner para mostrar una lista de los usuarios. este tambien permite eliminar uno/multiples usuarios seleccionados a traves de un checkbox, para esto tambien hace uso del servicio car permitiendo eliminar la relacion del owner con los vehiculos asociados borrando el campo ownerDni de estos.
Se genero un componente owner-edit el cual permite editar los datos de un cliente existente, asi como añadir uno nuevo.
>>>>>>> 7a6103b01bcfd726891c3dfab192225046b4ef65
