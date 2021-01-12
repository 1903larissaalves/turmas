import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarDisciplinasComponents } from './components/disciplina/listar-disciplinas/listar-disciplinas.component';

import { HomeComponent } from './components/home/home.component';
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