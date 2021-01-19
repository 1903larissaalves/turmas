import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlunoService } from '../Aluno.service';

@Component({
    templateUrl: 'cadastrar-aluno.component.html'
})
export class CadastrarAlunoComponent implements OnInit{

    alunoForm: FormGroup;
    ingresso: string;
    numeroMatricula: number;

    @Output() proximaTela = new EventEmitter<any>();
    @Output() voltaTela = new EventEmitter<any>();

    constructor(private alunoService: AlunoService,
                private formBuilder: FormBuilder, 
                private router: Router){}

    ngOnInit(): void {
        
        this.alunoForm = this.formBuilder.group({
            nome:['', Validators.required],
            ingresso:['', Validators.required]
        });
        let posicaoUltimoAluno =  this.alunoService.alunos.length - 1;
        this.numeroMatricula = this.alunoService.alunos[posicaoUltimoAluno].matricula + 1;
    }

    cadastrarAluno(){
        let novoAluno = {
            nome:  this.alunoForm.get('nome').value,
            ingresso: this.ingresso,
            matricula: this.numeroMatricula
         };  

         this.alunoService.adicionarNovoAluno(novoAluno);
         this.router.navigateByUrl('listar-alunos');
        
    }

    cancelar(){
        
        //this.router.navigateByUrl('listar-alunos');

        this.voltarTela();
    }

    selecionarIngresso(event){
        this.ingresso = event;    
    }

    proximoTela(){
        this.proximaTela.emit();
    }

    voltarTela(){
        this.voltaTela.emit();
    }
}