import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoButtonModule, PoModule } from '@po-ui/ng-components';
import { MensagemValidacaoComponent } from '../shared/mensagem-erro/mensagem-erro.component';
import { MensagemErroModule } from '../shared/mensagem-erro/mensagem-erro.module';
import { CadastrarDisciplinasComponent } from './cadastrar-disciplina/cadastrar-disciplinas.component';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { ListarDisciplinasComponents } from './listar-disciplinas/listar-disciplinas.component';

@NgModule({
    declarations:[
        DisciplinaComponent,
        CadastrarDisciplinasComponent,
        ListarDisciplinasComponents
    ],
    imports:[
        CommonModule,
        PoModule,
        PoButtonModule,
        FormsModule,
        ReactiveFormsModule,
        MensagemErroModule
    ]
})
export class DisciplinaModule{

}