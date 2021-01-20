import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoButtonModule, PoModule } from '@po-ui/ng-components';
import { MensagemErroModule } from '../shared/mensagem-erro/mensagem-erro.module';

@NgModule({

    imports:[
        CommonModule,
        PoModule,
        PoButtonModule,
        FormsModule,
        ReactiveFormsModule,
        MensagemErroModule
    ]
})
export class ProfessorModule{

}