import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';

import { TurmaService } from '../../turma/turma.service';
import { AlunoService } from '../Aluno.service';
@Component({
    selector: 'app-listar-alunos',
    templateUrl: 'listar-alunos.component.html'
})
export class ListarAlunosComponent implements OnInit{

    alunos: any[] = [];
    alunosSelecionados: any[] = [];

    alunoForm: FormGroup;
    ingresso: string;
    numeroMatricula: number;

    @Output() proximaTela = new EventEmitter<any>();
    @Output() voltaTela = new EventEmitter<any>();

    @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

    constructor(private alunoService: AlunoService,
                private turmaService: TurmaService,
                private formBuilder: FormBuilder, 
                private router: Router){}

    ngOnInit(): void {
        this.alunos = this.alunoService.listarAlunos();
        this.atualizarListaAlunos();
    }

    atualizarListaAlunos(): void {
        this.alunoForm = this.formBuilder.group({
            nome:['', Validators.required],
            ingresso:['', Validators.required]
        });

        this.gerarNumeroMatriculaAluno();
    }

    gerarNumeroMatriculaAluno(): void {
        let posicaoUltimoAluno =  this.alunoService.alunos.length - 1;
        this.numeroMatricula = this.alunoService.alunos[posicaoUltimoAluno].matricula + 1;
    }

    cadastrarAluno(): void {
        let novoAluno = {
            nome:  this.alunoForm.get('nome').value,
            ingresso: this.ingresso,
            matricula: this.numeroMatricula
         };  

         this.alunoService.adicionarNovoAluno(novoAluno);
         this.alunoForm.reset();
         this.closeModal();
         this.atualizarListaAlunos();
        
    }

    voltar(): void{
        this.voltarTela();
    }

    public verificarAlunosSelecionados(): void {
        if(verificarAlunosSelecionados(this.alunosSelecionados.length)){
            this.verificarVagasTurma();
        }else{
            alert("Uma turma tem que ter ao menos um aluno.");
        }
    }

    public verificarVagasTurma(): void {
        if(!verificarVagasTurma(this.turmaService.turma.vagas, this.alunosSelecionados.length)){
            alert("Número de alunos selecionados maior que vagas disponiveis na turma.");
        }else{
            this.turmaService.adicionarAlunosTurmas(this.alunosSelecionados);
            this.turmaService.finalizarTurma();
            this.router.navigateByUrl('home');
        }
    }

    eventoLista(aluno: any): void {
        for (let index = 0; index < this.alunos.length; index++) {
            const alunoDisponivel = this.alunos[index];
            
            if (alunoDisponivel.nome == aluno.nome) {
                if (aluno.selecionado ==  true) {
                    this.alunosSelecionados.push(alunoDisponivel);
                    break;
                } else {
                    let posicaoNaLista = this.alunosSelecionados.indexOf(alunoDisponivel);
                    this.alunosSelecionados.splice(posicaoNaLista, 1);
                }
            }
        }
        console.log(this.alunosSelecionados);
        
    }
    
    proximoTela(): void {
        this.proximaTela.emit();
    }

    voltarTela(): void {
        this.voltaTela.emit();
    }

    adicionar(): void {
        this.poModal.open();
    }

    confirmar: PoModalAction = {
        action: () => {
            this.cadastrarAluno();
        },
        label: 'Confirmar'
    };

    fechar: PoModalAction = {
        action: () => {
            this.closeModal();
        },
        label: 'Voltar',
        danger: true
    };

    closeModal(): void {
        this.alunoForm.reset();
        this.poModal.close();
    }

    selecionarIngresso(event: any): void {
        this.ingresso = event;    
    }
}

export function verificarAlunosSelecionados(aluno: number){
    if(aluno > 0){
        return true;
    }else{
        return false;
    }
}

export function verificarVagasTurma(vagas: number, alunosSelecionados: number) {
    if(vagas >= alunosSelecionados){
        return true;
    }else{
        return false;
    }    
}
