import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoButtonModule, PoModule } from '@po-ui/ng-components';
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
    ]
})
export class DisciplinaModule{

}