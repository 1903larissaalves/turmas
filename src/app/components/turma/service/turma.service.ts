import { Injectable } from '@angular/core';
import { Turma } from '../turma';

@Injectable({
    providedIn: 'root'
})
export class TurmaService{

    turma: Turma;

    iniciarNovaTurma(){
        this.turma = {
            numero: '',
            ano: 2020,
            periodo: '',
            vagas: 2,
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

    turmas = [
        {
            numero: 'T-51',
            ano: 2020,
            periodo: '1° Trimestre',
            vagas: 4, 
            disciplinas:[
                {
                    cargaHoraria: 40,
                    nome: 'Química',
                    professor:[
                        {
                            nome: 'Emiliano Oliveira',
                            titulo: 'Mestre'
                        }
                    ]
                }
            ],
            alunos:[
                {
                    matricula: 9,
                    nome: 'Oliver Santana',
                    ingresso: 'Vestibular'
                },
                {
                    matricula: 8,
                    nome: 'Paulo Caliari',
                    ingresso: 'Vestibular'
                }
            ]
        },
        {
            numero: 'T-62',
            ano: 2020,
            periodo: '2° Trimestre',
            vagas: 5, 
            disciplinas:[
                {
                    cargaHoraria: 40,
                    nome: 'Física',
                    professor:[
                        {
                            nome: 'Gladis Berttodo',
                            titulo: 'Doutor'
                        }
                    ]
                }
            ],
            alunos:[
                {
                    matricula: 9,
                    nome: 'Oliver Santana',
                    ingresso: 'Vestibular'
                },
                {
                    matricula: 8,
                    nome: 'Paulo Caliari',
                    ingresso: 'Vestibular'
                }
            ]
        },
    ];
}