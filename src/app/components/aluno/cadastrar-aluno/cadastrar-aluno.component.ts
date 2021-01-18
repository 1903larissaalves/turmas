import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlunoService } from '../Aluno.service';

@Component({
    templateUrl: 'cadastrar-aluno.component.html'
})
export class CadastrarAlunoComponent implements OnInit{

    alunoForm: FormGroup;
    ingresso: string;
    numeroMatricula: number;

    constructor(private alunoService: AlunoService,
                private formBuilder: FormBuilder, 
                private router: Router){}

    ngOnInit(): void {
        
        this.alunoForm = this.formBuilder.group({
            nome:[''],
            ingresso:['']
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
        this.router.navigateByUrl('listar-alunos');
    }
    selecionarIngresso(event){
        this.ingresso = event;
        
    }
}