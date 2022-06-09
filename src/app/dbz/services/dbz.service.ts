import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

    // Estándard de que es una propiedad privada
    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 8500
        }
    ];

    get personajes(): Personaje[] {
        // Rompemos la referencia con el operador spread
        return [...this._personajes];
    }

    constructor() { }

    agregarPersonajes(personaje: Personaje) {
        this._personajes.push(personaje);
    }
}