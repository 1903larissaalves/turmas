import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProfessorService{


    listarProfessores(){
        return this.professores;
    }

    professores = [
        {
            nome: 'Maria Helena Silva',
            titulo: 'Mestre'
        },
        {
            nome: 'Jonathan Castro',
            titulo: 'PHD'
        },
        {
            nome: 'David Oliveira',
            titulo: 'Mestre'
        },
        {
            nome: 'Kamilly Alves',
            titulo: 'Doutor'
        },
        {
            nome: 'Luana Costa',
            titulo: 'mestre'
        },
        {
            nome: 'Giovana Grande',
            titulo: 'PHD'
        },
        {
            nome: 'Elon Musk',
            titulo: 'PHD'
        }
    ]

}