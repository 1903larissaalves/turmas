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

    atualizarListaAlunos(){
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
         this.alunoForm.reset();
         this.closeModal();
         this.atualizarListaAlunos();
        
    }

    voltar(){
        this.voltarTela();
    }


    public verificarAlunosSelecionados(){
        let aluno: number;
        aluno = this.alunosSelecionados.length;

        if(verificarAlunosSelecionados(aluno) == true){
            this.verificarVagasTurma();
        }else{
            alert("Uma turma tem que ter ao menos um aluno.");
        }
    }

    public verificarVagasTurma(){
        if(!verificarVagasTurma(this.turmaService.turma.vagas, this.alunosSelecionados.length)){
            alert("Número de alunos selecionados maior que vagas disponiveis na turma.");
        }else{
            this.turmaService.adicionarAlunosTurmas(this.alunosSelecionados);
            this.turmaService.finalizarTurma();
            this.router.navigateByUrl('home');
        }
    }

    eventoLista(aluno) {
        for (let index = 0; index < this.alunos.length; index++) {
            const alunoDisponivel = this.alunos[index];
            
            if (alunoDisponivel.nome == aluno.nome) {
                
                if (aluno.selecionada ==  true) {
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
    
    proximoTela(){
        this.proximaTela.emit();
    }

    voltarTela(){
        this.voltaTela.emit();
    }

    adicionarNovoAluno() {
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

    closeModal() {
        this.alunoForm.reset();
        this.poModal.close();
    }

    selecionarIngresso(event){
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
