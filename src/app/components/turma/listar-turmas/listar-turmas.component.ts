import { Component, Input } from '@angular/core';
import { TurmaService } from '../turma.service';

@Component({
    selector: 'app-listar-turmas',
    templateUrl: 'listar-turmas.component.html'
})
export class ListarTurmasComponent{

    @Input() numero = '';

}