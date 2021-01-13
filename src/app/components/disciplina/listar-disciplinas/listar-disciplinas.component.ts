import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisciplinaService } from '../disciplina.service';

@Component({
    templateUrl: 'listar-disciplinas.component.html'
})
export class ListarDisciplinasComponents implements OnInit{

    disciplinas: any[] = [];
    disciplinasSelecionadas: any[] = [];

    constructor(private disciplinaService: DisciplinaService,
                private router: Router){}

    ngOnInit(): void {
        this.disciplinas = this.disciplinaService.listarDisciplinas();
    }

    cancelar(){
        this.router.navigateByUrl('cadastrar-turma');
    }

    proximo(){
        this.router.navigateByUrl('listar-alunos');
    }

    eventoLista(disciplina) {
        for (let index = 0; index < this.disciplinas.length; index++) {
            const disciplinaDisponivel = this.disciplinas[index];
            
            if (disciplinaDisponivel.disc == disciplina.disciplina) {
                
                if (disciplina.selecionada ==  true) {
                    this.disciplinasSelecionadas.push(disciplinaDisponivel);
                } else {
                    let posicaoNaLista = this.disciplinasSelecionadas.indexOf(disciplinaDisponivel);
                    this.disciplinasSelecionadas.splice(posicaoNaLista, 1);
                }
            }
        }
        console.log(disciplina);
        
    }
}