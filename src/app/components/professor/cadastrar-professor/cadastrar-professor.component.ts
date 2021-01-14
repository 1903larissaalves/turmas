import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfessorService } from '../professor.service';


@Component({
    templateUrl: 'cadastrar-professor.component.html'
})
export class CadastrarProfessorComponent implements OnInit{

    professorForm: FormGroup;

    constructor(private router: Router, private formBuilder: FormBuilder,
                private professorService: ProfessorService){}
    
    ngOnInit(): void {
        this.professorForm = this.formBuilder.group({
            nome: [''],
            titulo: ['']
        })
    }

    cancelar(){
        this.router.navigateByUrl('cadastrar-disciplina');
    }

    cadastrarNovoProfessor(){
        let professor = {
            nome: this.professorForm.get('nome').value,
            titulo: this.professorForm.get('titulo').value
        }

        this.professorService.cadastrarNovoProfessor(professor);
        this.router.navigateByUrl('cadastrar-disciplina');
    }
}