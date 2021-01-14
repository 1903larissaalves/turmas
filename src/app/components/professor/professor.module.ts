import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoButtonModule, PoModule } from '@po-ui/ng-components';

import { CadastrarProfessorComponent } from './cadastrar-professor/cadastrar-professor.component';

@NgModule({
    declarations:[
        CadastrarProfessorComponent
    ],
    imports:[
        CommonModule,
        PoModule,
        PoButtonModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class ProfessorModule{

}