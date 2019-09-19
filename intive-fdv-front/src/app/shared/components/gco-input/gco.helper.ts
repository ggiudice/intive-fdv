import { Injectable } from '@angular/core';
import { Validators, ValidatorFn } from '@angular/forms';

export class CustomValidators {
    code: string; // evluar si hacer un enum, pero tener en cuenta uppercase
    param: string | number; // TODo ver de evaluar en el metodo en que caso se debe recibir string y en que no
    title: string;

    constructor(code: string, param: string | number, title: string) {
        this.code = code;
        this.param = param;
        this.title = title;
    }
}

export class CustomForm {
    name: string; // Validar que name no debe tener espacios ni caracteres especiales
    isActivate: boolean; // Si lo quiere desactivar y no dibuja nada de nada
    type: string;
    label: string;
    placeholder: string;
    validators: CustomValidators[];

    constructor(name: string, isActivate: boolean, type: string, label: string, placeholder: string, validators: CustomValidators[]) {
        this.name = name;
        this.isActivate = isActivate;
        this.type = type;
        this.label = label;
        this.placeholder = placeholder;
        this.validators = validators.map(validator => new CustomValidators(validator.code, validator.param, validator.title));
    }
}

/*
TODO:
- Nombrar bien a las clases y los atributos
- Validar el json que viene
- Tener en cuenta el type date y que si se usa un tipo datepicker que sea uno pasado por paramtro
- Si es tipo date o datepicker, las configuraciones de min y max, o la que poseas esa libreria
- Ver de armar un modulo con difrentes cosas cutoms-..
*/
@Injectable({
  providedIn: 'root'
})
export class GcoHelper {

    // TODO hacer un validador del JSOn, que venga de la forma que debe ser
    // Y tambien si el code es min que sea number, y asi...
    // https://angular.io/api/forms/Validators
    /* static getJsonMOCK() {
        const mocks = Array<CustomForm>();

        mocks.push(new CustomForm('direccion', true, 'text', 'Direccion', 'Ingrese direccion',
            [  {code: 'required', param: null }, {code: 'maxLength', param: 10 }]));
        mocks.push(new CustomForm('localidad', false, 'text', 'Localidad', 'Ingrese localidad', [  {code: 'required', param: null }]));
        mocks.push(new CustomForm('nro', true, 'number', 'nro', 'Ingrese nro',
            [ {code: 'required', param: null }, { code: 'max', param: 10000}]));
        mocks.push(new CustomForm('edad', true, 'number', 'Edad', 'Ingrese edad', [ {code: 'min', param: 18 }, { code: 'max', param: 35}]));
        // TODo la idea seria hacer un pipe en la respuesta de recuparar el json y filtrar solo los activos
        debugger
        return mocks.filter(mock => mock.isActivate === true);
    } */

    // TODO esto por ahora es harkode y recibe array de typo
    static getValidatorsForJson(jsonData: CustomValidators[]): ValidatorFn[] {
        return jsonData.map(data => this.getMapValidator(data));
    }

    private static getMapValidator(data: any): ValidatorFn {
        const mapa = new Map<string, any>();
        mapa.set('required', Validators.required);
        mapa.set('min', Validators.min(Number(data.param)));
        mapa.set('max', Validators.max(Number(data.param)));
        mapa.set('requiredtrue', Validators.requiredTrue);
        mapa.set('email', Validators.email);
        mapa.set('minlength', Validators.minLength(Number(data.param)));
        mapa.set('maxlength', Validators.maxLength(Number(data.param)));
        mapa.set('pattern', Validators.pattern(String(data.param)));
        mapa.set('null', Validators.nullValidator);

        return mapa.get(String(data.code).toLowerCase());
    }
}
