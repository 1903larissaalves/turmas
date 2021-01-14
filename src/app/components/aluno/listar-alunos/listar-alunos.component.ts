import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';

import { AlunoService } from '../Aluno.service';

@Component({
    templateUrl: 'listar-alunos.component.html'
})
export class ListarAlunosComponent implements OnInit{

    alunos: any[] = [];
    alunosSelecionados: any[] = [];

    alunoForm: FormGroup;
    ingresso: string;
    numeroMatricula: number;

    @ViewChild('optionsForm', { static: true }) form: NgForm;
    
    @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

    constructor(private alunoService: AlunoService,
                private router: Router, 
                private formBuilder: FormBuilder){}

    ngOnInit(): void {
        this.alunos = this.alunoService.listarAlunos();

        this.alunoForm = this.formBuilder.group({
            nome:[''],
            ingresso:['']
        });
        let posicaoUltimoAluno =  this.alunoService.alunos.length - 1;
        this.numeroMatricula = this.alunoService.alunos[posicaoUltimoAluno].matricula + 1;
    }

    cancelar(){
        this.router.navigateByUrl('listar-disciplinas');
    }

    finalizarTurma(){
        this.router.navigateByUrl('');
    }

    openQuestionnaire() {
        this.poModal.open();
    }

    cadastrarAluno(){
        let novoAluno = {
            nome:  this.alunoForm.get('nome').value,
            ingresso: this.ingresso,
            matricula: this.numeroMatricula
         };  

         this.alunoService.adicionarNovoAluno(novoAluno);

         console.log(novoAluno);

         this.fecharModal(); 
        
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

    confirmar: PoModalAction = {
    action: () => {
        this.cadastrarAluno();
    },
    label: 'confirmar'
    };

    fecharModal() {
        this.form.reset();
        this.poModal.close();
    }

    close: PoModalAction = {
        action: () => {
          this.fecharModal();
        },
        label: 'Cancelar',
        danger: true
    };

    selecionarIngresso(event){
        this.ingresso = event;
        
    }
    
}