import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-aluno',
    templateUrl: 'aluno.component.html'
})
export class AlunoComponent{

    @Input() nome = '';
    @Output() eventoAluno = new EventEmitter<any>();

    alterarSelecao(selecionada) {
        let aluno =  { 
            nome: this.nome, 
            selecionada
        };

        this.eventoAluno.emit(aluno);
    }

}