import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProfessorService{


    listarProfessores(){
        return this.professores;
    }

    cadastrarNovoProfessor(professor){
        this.professores.push(professor);
    }

    professores = [
        {
            id: 1,
            nome: 'Maria Helena Silva',
            titulo: 'Mestre'
        },
        {
            id: 2,
            nome: 'Jonathan Castro',
            titulo: 'PHD'
        },
        {
            id: 3,
            nome: 'David Oliveira',
            titulo: 'Mestre'
        },
        {
            id: 4,
            nome: 'Kamilly Alves',
            titulo: 'Doutor'
        },
        {
            id: 5,
            nome: 'Luana Costa',
            titulo: 'mestre'
        },
        {
            id: 6,
            nome: 'Giovana Grande',
            titulo: 'PHD'
        },
        {
            id: 7,
            nome: 'Elon Musk',
            titulo: 'PHD'
        }
    ]

}