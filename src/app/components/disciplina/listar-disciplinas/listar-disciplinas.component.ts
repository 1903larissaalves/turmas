import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TurmaService } from '../../turma/turma.service';
import { DisciplinaService } from '../disciplina.service';

@Component({
    templateUrl: 'listar-disciplinas.component.html'
})
export class ListarDisciplinasComponents implements OnInit{

    disciplinas: any[] = [];
    disciplinasSelecionadas: any[] = [];

    constructor(private disciplinaService: DisciplinaService,
                private turmaService: TurmaService,
                private router: Router){}

    ngOnInit(): void {
        this.disciplinas = this.disciplinaService.listarDisciplinas();
    }

    cancelar(){
        this.router.navigateByUrl('cadastrar-turma');
    }

    proximo(){
        if(this.disciplinasSelecionadas.length <= 0){
            alert("Uma turma tem que ter pelo menos uma disciplina");
        }else{
            this.turmaService.adicionarDisciplinasTurma(this.disciplinasSelecionadas);
            this.router.navigateByUrl('listar-alunos');
        }
    }

    adicionarDisciplina(){
        this.router.navigateByUrl('cadastrar-disciplina');
    }

    eventoLista(disciplina) {
        for (let index = 0; index < this.disciplinas.length; index++) {
            const disciplinaDisponivel = this.disciplinas[index];
            
            if (disciplinaDisponivel.nome == disciplina.disciplina) {
                
                if (disciplina.selecionada ==  true) {
                    this.disciplinasSelecionadas.push(disciplinaDisponivel);
                } else {
                    let posicaoNaLista = this.disciplinasSelecionadas.indexOf(disciplinaDisponivel);
                    this.disciplinasSelecionadas.splice(posicaoNaLista, 1);
                }
            }
        }
    }
}