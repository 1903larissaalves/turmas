import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoSelectOption } from '@po-ui/ng-components';
import { ProfessorService } from '../../professor/professor.service';


@Component({
    templateUrl: 'cadastrar-disciplinas.component.html'
})
export class CadastrarDisciplinasComponent implements OnInit{

    listaProfessores: any[] = [];
    professores: PoSelectOption[] = [];

    constructor(private router: Router, private professorService: ProfessorService){}

    ngOnInit(): void {
        this.listaProfessores = this.professorService.listarProfessores();

        this.listaProfessores.map(professor =>{
            this.professores = [
                ... this.professores, 
                { label: professor.nome, value: professor.nome }
            ]
        });
    }

    cancelar(){
        this.router.navigateByUrl('listar-disciplinas')
    }

    proximo(){
        this.router.navigateByUrl('listar-alunos')
    }

    adicionarProfessor(){
        this.router.navigateByUrl('cadastrar-professor')
    }
}