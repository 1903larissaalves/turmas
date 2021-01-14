import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    templateUrl: 'cadastrar-disciplinas.component.html'
})
export class CadastrarDisciplinasComponent{

    constructor(private router: Router){}

    cancelar(){
        this.router.navigateByUrl('listar-disciplinas')
    }

    proximo(){
        this.router.navigateByUrl('listar-alunos')
    }

    adicionarProfessor(){
        this.router.navigateByUrl('cadastrar-professor')
    }
}