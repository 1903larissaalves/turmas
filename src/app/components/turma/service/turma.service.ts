import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TurmaService{

    turma:{
        numero,
        ano,
        periodo,
        vagas, 
        disciplinas,
        alunos
    }

    iniciarNovaTurma(){
        this.turma = {
            numero: '',
            ano: '',
            periodo: '',
            vagas: '',
            disciplinas: [],
            alunos: []
        }
    }

    adicionarDisciplinasTurma(disciplinas){
        this.turma.disciplinas = disciplinas;
        console.log(this.turma);
    }

    adicionarAlunosTurmas(alunos){
        this.turma.alunos = alunos;
        console.log(this.turma);
    }

    adicionarInformacoesTurma(numero, ano, periodo, vagas){
        this.iniciarNovaTurma();
        
        this.turma.numero = numero;
        this.turma.ano = ano;
        this.turma.periodo = periodo;
        this.turma.vagas = vagas;
    }

    finalizarTurma(){
        this.turmas.push(this.turma);
    }

    listarTurmas(){
        return this.turmas;        
    }

    turmas = [];

}