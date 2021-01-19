import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoButtonModule, PoModule } from '@po-ui/ng-components';
import { MensagemErroModule } from '../shared/mensagem-erro/mensagem-erro.module';
import { CadastrarTurmaComponent } from './cadastrar-turma/cadastrar-turma.component';

@NgModule({
    declarations:[
        CadastrarTurmaComponent
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
        CadastrarTurmaComponent
    ]
})
export class TurmaModule{

}