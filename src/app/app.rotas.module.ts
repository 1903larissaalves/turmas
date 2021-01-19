import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarAlunoComponent } from './components/aluno/cadastrar-aluno/cadastrar-aluno.component';

import { ListarAlunosComponent } from './components/aluno/listar-alunos/listar-alunos.component';
import { CadastrarDisciplinasComponent } from './components/disciplina/cadastrar-disciplina/cadastrar-disciplinas.component';
import { ListarDisciplinasComponents } from './components/disciplina/listar-disciplinas/listar-disciplinas.component';
import { HomeComponent } from './components/home/home.component';
import { CadastrarProfessorComponent } from './components/professor/cadastrar-professor/cadastrar-professor.component';
import { CadastrarTurmaComponent } from './components/turma/cadastrar-turma/cadastrar-turma.component';
import { PaginaNaoEncontradaComponent } from './erros/pagina-nao-encontrada.component';


const rotas: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'stepper',
        loadChildren: () => import('./components/stepper/stepper.module').then(m => m.StepperModule),
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
    },
    {
        path: 'cadastrar-aluno',
        component: CadastrarAlunoComponent
    },
    {
        path: '**',
        component: PaginaNaoEncontradaComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(rotas, { useHash: true })],
    exports: [RouterModule]
})
export class AppRotasModule {

}