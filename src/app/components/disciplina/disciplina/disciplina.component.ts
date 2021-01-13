import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-disciplina',
    templateUrl: 'disciplina.component.html'
})
export class DisciplinaComponent{

    @Input() disciplina: any;
    @Output() eventoDisciplina = new EventEmitter<any>();

    alterarSelecao(selecionada) {
        let disciplina =  { 
            disciplina: this.disciplina, 
            selecionada
        };

        this.eventoDisciplina.emit(disciplina);
    }
}