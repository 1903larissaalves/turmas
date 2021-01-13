import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { TurmaService } from '../turma.service';

@Component({
    templateUrl:'cadastrar-turma.component.html'
})
export class CadastrarTurmaComponent implements OnInit{

    turmaForm: FormGroup;
    periodo;

    constructor(private router: Router,
                private formBuilder: FormBuilder,
                private turmaService: TurmaService){}


    ngOnInit(): void {
        this.turmaForm = this.formBuilder.group({
            numero: [''], 
            ano:[''],
            periodo:[''],
            vagas:['']
          });
    }

    cancelar(){
        this.router.navigateByUrl('');
    }

    criarTurma(){
        
        let turma = {
            numero: this.turmaForm.get('numero').value,
            ano: this.turmaForm.get('ano').value,
            periodo: this.periodo,
            vagas: this.turmaForm.get('vagas').value
    
        }
        
        this.turmaService.adicionarInformacoesTurma(turma.numero, turma.ano, turma.periodo, turma.vagas);

        console.log(turma);
        

        this.router.navigateByUrl('listar-disciplinas');
    }

    selecionarPeriodo(event){
        console.log();
        this.periodo = event;
        
    }

}