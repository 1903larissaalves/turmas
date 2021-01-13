import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AlunoService{

    listarAlunos(){
        return this.alunos;
    }

    alunos = [
        {
            nome: 'Ana Paula Varela',
            ingresso: 'vestibular',
            matricula: 1
        },
        {
            nome: 'Bernando Vent',
            ingresso: 'Enade',
            matricula: 2
        },
        {
            nome: 'Eduarda Silva',
            ingresso: 'Vestibular',
            matricula: 3
        },
        {
            nome: 'Joana Farennat',
            ingresso: 'Vestibular',
            matricula: 4
        },
        {
            nome: 'Lauriano Costa',
            ingresso: 'Enade',
            matricula: 5
        },
        {
            nome: 'Maicon Junior',
            ingresso: 'Enade',
            matricula: 6
        },
        {
            nome: 'Nicole Ravena',
            ingresso: 'Enade',
            matricula: 7
        },
        {
            nome: 'Paulo Caliari',
            ingresso: 'Vestibular',
            matricula: 8
        },
        {
            nome: 'Oliver Santana',
            ingresso: 'Vestibular',
            matricula: 9
        }
    ]

}