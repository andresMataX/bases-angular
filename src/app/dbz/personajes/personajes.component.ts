import { Component, Input } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-personajes',
    templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

    // Ya el main-page no tiene la variable personajes, el servicio es quien los tiene
    // @Input() personajes: Personaje[] = [];

    get personajes() {
        return this.dbzService.personajes;
    }

    constructor(
        // Inyectamos el servicio en el componente
        private dbzService: DbzService
    ) { }
}
