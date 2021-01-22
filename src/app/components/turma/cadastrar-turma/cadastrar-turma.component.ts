import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TurmaService } from '../service/turma.service';

@Component({
    selector: 'app-cadastrar-turma',
    templateUrl:'cadastrar-turma.component.html'
})
export class CadastrarTurmaComponent implements OnInit{

    turmaForm: FormGroup;
    periodo;

    @Output() proximaTela = new EventEmitter<any>();
    @Output() voltaTela = new EventEmitter<any>();

    constructor(private router: Router,
                private formBuilder: FormBuilder,
                private turmaService: TurmaService){}


    ngOnInit(): void {
        this.turmaForm = this.formBuilder.group({
            numero: ['', Validators.required], 
            ano:['', Validators.required],
            periodo:['', Validators.required],
            vagas:['', Validators.required]
        });
    }

    cancelar(){
        this.router.navigateByUrl('home');
    }

    criarTurma(){
        
        let turma = {
            numero: this.turmaForm.get('numero').value,
            ano: this.turmaForm.get('ano').value,
            periodo: this.periodo,
            vagas: this.turmaForm.get('vagas').value
    
        }
        
        this.turmaService.adicionarInformacoesTurma(turma.numero, turma.ano, turma.periodo, turma.vagas);

        this.proximoTela();
    }

    selecionarPeriodo(event){
        this.periodo = event;
    }

    proximoTela(){
        this.proximaTela.emit();
    }

    voltarTela(){
        this.voltaTela.emit();
    }

}