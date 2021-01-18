import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TurmaService } from '../turma/turma.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html'
})
export class HomeComponent{

    turmas: any[] = [];

    constructor(private turmaService: TurmaService, private router: Router){

        this.turmas = this.turmaService.listarTurmas();
    
    }
    
    iniciarCadastroTurma(){
        this.router.navigateByUrl('cadastrar-turma');
    }
}