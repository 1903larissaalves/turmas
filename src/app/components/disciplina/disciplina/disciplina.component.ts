import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-disciplina',
    templateUrl: 'disciplina.component.html'
})
export class DisciplinaComponent{

    @Input() disciplina: any;
}