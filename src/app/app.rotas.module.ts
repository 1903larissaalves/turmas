import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarAlunosComponent } from './components/aluno/listar-alunos/listar-alunos.component';
import { ListarDisciplinasComponents } from './components/disciplina/listar-disciplinas/listar-disciplinas.component';
import { HomeComponent } from './components/home/home.component';
import { CadastrarTurmaComponent } from './components/turma/cadastrar-turma/cadastrar-turma.component';
import { PaginaNaoEncontradaComponent } from './erros/pagina-nao-encontrada.component';


const rotas: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'stepper',
        loadChildren: () => import('./components/shared/stepper/stepper.module').then(m => m.StepperModule),
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