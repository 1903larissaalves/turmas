import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TurmaService{

    turma:{
        numero,
        ano,
        periodo,
        vagas
    }

    iniciarNovaTurma(){
        this.turma = {
            numero: '',
            ano: '',
            periodo: '',
            vagas: ''
        }
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

    turmas = [];

}