import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-listar-turmas',
    templateUrl: 'turma.component.html'
})
export class TurmaComponent{

    @Input() numero: string = '';

}