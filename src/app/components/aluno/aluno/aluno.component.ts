import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-aluno',
    templateUrl: 'aluno.component.html'
})
export class AlunoComponent{

    @Input() nome = '';

}