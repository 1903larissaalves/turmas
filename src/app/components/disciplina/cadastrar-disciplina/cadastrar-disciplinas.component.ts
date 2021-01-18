import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoSelectOption } from '@po-ui/ng-components';

import { ProfessorService } from '../../professor/professor.service';
import { DisciplinaService } from '../disciplina.service';


@Component({
    templateUrl: 'cadastrar-disciplinas.component.html'
})
export class CadastrarDisciplinasComponent implements OnInit{

    listaProfessores: any[] = [];
    professores: PoSelectOption[] = [];

    disciplinasForm: FormGroup;

    constructor(private router: Router, private professorService: ProfessorService,
                 private formBuilder: FormBuilder,
                 private disciplinaService: DisciplinaService){}

    ngOnInit(): void {

        this.disciplinasForm = this.formBuilder.group({
            nome: ['', Validators.required],
            professor: ['', Validators.required],
            cargaHoraria: ['', Validators.required]
        })

        this.listaProfessores = this.professorService.listarProfessores();

        this.listaProfessores.map(professor =>{
            this.professores = [
                ... this.professores, 
                { label: professor.nome, value: professor.nome }
            ]
        });

        console.log(this.listaProfessores);
        
    }

    cadastrarDisciplina(){
        
        let disciplina = {
            nome: this.disciplinasForm.get('nome').value,
            professor: this.disciplinasForm.get('professor').value,
            cargaHoraria: this.disciplinasForm.get('cargaHoraria').value
        }

        this.disciplinaService.cadastrarDisciplina(disciplina);
        this.router.navigateByUrl('listar-disciplinas');
  
    }

    cancelar(){
        this.router.navigateByUrl('listar-disciplinas')
    }

    adicionarProfessor(){
        this.router.navigateByUrl('cadastrar-professor')
    }
}