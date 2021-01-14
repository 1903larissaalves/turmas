import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarAlunosComponent } from './components/aluno/listar-alunos/listar-alunos.component';
import { CadastrarDisciplinasComponent } from './components/disciplina/cadastrar-disciplina/cadastrar-disciplinas.component';
import { ListarDisciplinasComponents } from './components/disciplina/listar-disciplinas/listar-disciplinas.component';
import { HomeComponent } from './components/home/home.component';
import { CadastrarProfessorComponent } from './components/professor/cadastrar-professor/cadastrar-professor.component';
import { CadastrarTurmaComponent } from './components/turma/cadastrar-turma/cadastrar-turma.component';


const rotas: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'cadastrar-turma',
        component: CadastrarTurmaComponent
    },
    {
        path: 'listar-disciplinas',
        component: ListarDisciplinasComponents
    },
    {
        path: 'listar-alunos',
        component: ListarAlunosComponent
    },
    {
        path: 'cadastrar-disciplina',
        component: CadastrarDisciplinasComponent
    },
    {
        path: 'cadastrar-professor',
        component: CadastrarProfessorComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(rotas)
    ],
    exports: [ RouterModule ]
})
export class AppRotasModule{

}