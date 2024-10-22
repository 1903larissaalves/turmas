import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TurmaService } from '../service/turma.service';

@Component({
    selector: 'app-cadastrar-turma',
    templateUrl:'turma-form.component.html'
})
export class TurmaFormComponent implements OnInit{

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

    cadastrarTurma(){
        if(!this.turmaForm.invalid || this.turmaForm.pending){
            let turma = {
                numero: this.turmaForm.get('numero').value,
                ano: this.turmaForm.get('ano').value,
                periodo: this.periodo,
                vagas: this.turmaForm.get('vagas').value
            }

            if(turma.vagas > 0){
                this.turmaService.adicionarInformacoesTurma(turma.numero, turma.ano, turma.periodo, turma.vagas);
                this.proximoTela();
                return true;
            }else{
                alert("Para a abertura de uma turma é necessário que haja pelo menos uma vaga");
                return false;
            }            
        }
    }

    selecionarPeriodo(event){
        this.periodo = event;
    }

    cancelar(){
        this.router.navigateByUrl('');
    }

    proximoTela(){
        this.proximaTela.emit();
    }

    voltarTela(){
        this.voltaTela.emit();
    }

}