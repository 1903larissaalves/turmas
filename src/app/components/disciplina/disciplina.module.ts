import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoButtonModule, PoModule } from '@po-ui/ng-components';
import { MensagemErroModule } from '../shared/mensagem-erro/mensagem-erro.module';
import { DisciplinaComponent } from './disciplina/disciplina.component';
import { DisciplinaFormComponents } from './disciplina-form/disciplina-form.component';
@NgModule({
    declarations:[
        DisciplinaComponent,
        DisciplinaFormComponents
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
        DisciplinaFormComponents
    ]
})
export class DisciplinaModule{}