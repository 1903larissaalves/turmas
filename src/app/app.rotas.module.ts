import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const rotas: Routes = [
    {
        path:'home',
        component: HomeComponent
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