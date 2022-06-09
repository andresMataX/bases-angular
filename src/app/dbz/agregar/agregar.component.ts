import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-agregar',
    templateUrl: './agregar.component.html'
})
export class AgregarComponent {

    // Puede agregarse un alias ('data')
    @Input() nuevo: Personaje = {
        nombre: '',
        poder: 0
    }

    constructor(private dbzService: DbzService) { }

    // Puede agregarse un alias
    // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

    agregar() {
        if (!this.nuevo.nombre) return;

        // console.log(this.nuevo);
        // Emitimos desde el hijo hacia al padre
        // this.onNuevoPersonaje.emit(this.nuevo);

        this.dbzService.agregarPersonajes(this.nuevo);

        this.nuevo = {
            nombre: '',
            poder: 0
        }
    }
}
