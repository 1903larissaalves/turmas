import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PoModalComponent } from '@po-ui/ng-components';
import { TurmaService } from '../../turma/turma.service';

import { AlunoService } from '../Aluno.service';

@Component({
    selector: 'app-listar-alunos',
    templateUrl: 'listar-alunos.component.html'
})
export class ListarAlunosComponent implements OnInit{

    alunos: any[] = [];
    alunosSelecionados: any[] = [];

    @Output() proximaTela = new EventEmitter<any>();
    @Output() voltaTela = new EventEmitter<any>();

    constructor(private alunoService: AlunoService,
                private turmaService: TurmaService,
                private router: Router){}

    ngOnInit(): void {
        this.alunos = this.alunoService.listarAlunos();
    }

    voltar(){
        this.voltarTela();
        //this.router.navigateByUrl('listar-disciplinas');
    }

    finalizarTurma(){
        if(this.turmaService.turma.vagas < this.alunosSelecionados.length){
            alert("Número de alunos selecionados maior que vagas disponiveis");
        }else{
            this.turmaService.adicionarAlunosTurmas(this.alunosSelecionados);
            this.turmaService.finalizarTurma();
            this.router.navigateByUrl('');
        }
    }

    eventoLista(aluno) {
        for (let index = 0; index < this.alunos.length; index++) {
            const alunoDisponivel = this.alunos[index];
            
            if (alunoDisponivel.nome == aluno.nome) {
                
                if (aluno.selecionada ==  true) {
                    this.alunosSelecionados.push(alunoDisponivel);
                    break;
                } else {
                    let posicaoNaLista = this.alunosSelecionados.indexOf(alunoDisponivel);
                    this.alunosSelecionados.splice(posicaoNaLista, 1);
                }
            }
        }
        console.log(this.alunosSelecionados);
        
    }

    adicionarNovoAluno(){
        this.router.navigateByUrl('cadastrar-aluno');
    }

    proximoTela(){
        this.proximaTela.emit();
    }

    voltarTela(){
        this.voltaTela.emit();
    }

    
}