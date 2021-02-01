import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoButtonModule, PoModule } from '@po-ui/ng-components';
import { MensagemErroModule } from '../shared/mensagem-erro/mensagem-erro.module';
import { TurmaFormComponent } from './turma-form/turma-form.component';

@NgModule({
    declarations:[
        TurmaFormComponent
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
        TurmaFormComponent
    ]
})
export class TurmaModule{}