import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    templateUrl: 'cadastrar-professor.component.html'
})
export class CadastrarProfessorComponent{

    constructor(private router: Router){}

    cancelar(){
        this.router.navigateByUrl('cadastrar-disciplina');
    }

    proximo(){
        this.router.navigateByUrl('listar-disciplinas');
    }
}