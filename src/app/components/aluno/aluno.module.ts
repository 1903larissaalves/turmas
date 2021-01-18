import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoButtonModule, PoModule } from '@po-ui/ng-components';
import { MensagemErroModule } from '../shared/mensagem-erro/mensagem-erro.module';

import { AlunoComponent } from './aluno/aluno.component';
import { CadastrarAlunoComponent } from './cadastrar-aluno/cadastrar-aluno.component';
import { ListarAlunosComponent } from './listar-alunos/listar-alunos.component';


@NgModule({
    declarations:[
        AlunoComponent,
        ListarAlunosComponent,
        CadastrarAlunoComponent
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
export class AlunoModule{

}