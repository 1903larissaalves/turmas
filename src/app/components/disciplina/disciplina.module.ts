import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoButtonModule, PoModule } from '@po-ui/ng-components';
import { MensagemErroModule } from '../shared/mensagem-erro/mensagem-erro.module';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { ListarDisciplinasComponents } from './listar-disciplinas/listar-disciplinas.component';

@NgModule({
    declarations:[
        DisciplinaComponent,
        ListarDisciplinasComponents
    ],
    imports:[
        CommonModule,
        PoModule,
        PoButtonModule,
        FormsModule,
        ReactiveFormsModule,
        MensagemErroModule
    ],
    exports:[
        DisciplinaComponent,
        ListarDisciplinasComponents
    ]
})
export class DisciplinaModule{

}