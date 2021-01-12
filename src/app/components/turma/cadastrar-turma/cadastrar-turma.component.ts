import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl:'cadastrar-turma.component.html'
})
export class CadastrarTurmaComponent{

    constructor(private router: Router){}

    cancelar(){
        this.router.navigateByUrl('');
    }

    proximo(){
        alert("teste");
    }

}