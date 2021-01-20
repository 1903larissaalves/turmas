import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'pagina-nao-encontrada.component.html'
})
export class PaginaNaoEncontradaComponent{

    constructor(private router: Router){}

    irParaHome(){
        this.router.navigateByUrl('home');
    }

}