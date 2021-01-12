import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisciplinaService } from '../disciplina.service';

@Component({
    templateUrl: 'listar-disciplinas.component.html'
})
export class ListarDisciplinasComponents implements OnInit{

    disciplinas: any[] = [];

    constructor(private disciplinaService: DisciplinaService,
                private router: Router){}

    ngOnInit(): void {
        this.disciplinas = this.disciplinaService.listarDisciplinas();
    }

    cancelar(){
        this.router.navigateByUrl('cadastrar-turma');
    }
}