import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-listar-turmas',
    templateUrl: 'listar-turmas.component.html'
})
export class ListarTurmasComponent{

    @Input() numero: string = '';

}