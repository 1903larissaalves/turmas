import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PaginaNaoEncontradaComponent } from './erros/pagina-nao-encontrada.component';


const rotas: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'stepper',
        loadChildren: () => import('./components/shared/stepper/stepper.module').then(m => m.StepperModule),
        data:{
            title: 'Cadastrar Turma'
        }
    },
    {
        path: '**',
        component: PaginaNaoEncontradaComponent,
        data:{
            title: 'Pagina não encontrada'
        }
    }
]

@NgModule({
    imports: [RouterModule.forRoot(rotas, { useHash: true })],
    exports: [RouterModule]
})
export class AppRotasModule {

}