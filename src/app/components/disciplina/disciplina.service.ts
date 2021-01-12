import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DisciplinaService{

    listarDisciplinas(){
        return this.disciplinas;
    }

    disciplinas =[
        {
            nome: 'Matemática',
            professor: {
                nome: 'Elisabeth Silva e Silva',
                titulo: 'Mestre'
            },
            cargaHoraria: '40'
        },
        {
            nome: 'Portugues',
            professor: {
                nome: 'Tania Roberta Rodrigues',
                titulo: 'Doutor'
            },
            cargaHoraria: '40'
        },
        {
            nome: 'Geografia',
            professor: {
                nome: 'Edson Leite',
                titulo: 'Doutor'
            },
            cargaHoraria: '40'
        },
        {
            nome: 'História',
            professor: {
                nome: 'Evandro Santos',
                titulo: 'PHD'
            },
            cargaHoraria: '40'
        },
        {
            nome: 'Física',
            professor: {
                nome: 'Gladis Berttodo',
                titulo: 'Doutor'
            },
            cargaHoraria: '40'
        },
        {
            nome: 'Química',
            professor: {
                nome: 'Emiliano Oliveira',
                titulo: 'Mestre'
            },
            cargaHoraria: '40'
        },
        {
            nome: 'Ed. Física',
            professor: {
                nome: 'Elisa Noronha',
                titulo: 'Mestre'
            },
            cargaHoraria: '40'
        },
        {
            nome: 'Lingua Inglesa',
            professor: {
                nome: 'Jociane Font',
                titulo: 'Doutor'
            },
            cargaHoraria: '40'
        },
        {
            nome: 'Lingua Espanhola',
            professor: {
                nome: 'Karen Fondonhoça',
                titulo: 'Doutor'
            },
            cargaHoraria: '40'
        },
        {
            nome: 'Arte',
            professor: {
                nome: 'Luiza Silveira',
                titulo: 'Doutor'
            },
            cargaHoraria: '40'
        }
    ]

}