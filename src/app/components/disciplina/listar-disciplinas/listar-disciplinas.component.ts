import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PoModalAction, PoModalComponent, PoSelectOption } from '@po-ui/ng-components';

import { ProfessorService } from '../../professor/professor.service';
import { TurmaService } from '../../turma/turma.service';
import { DisciplinaService } from '../disciplina.service';

@Component({
    selector: 'app-listar-disciplinas',
    templateUrl: 'listar-disciplinas.component.html'
})
export class ListarDisciplinasComponents implements OnInit{

    disciplinas: any[] = [];
    disciplinasSelecionadas: any[] = [];
    disciplinasForm: FormGroup;

    listaProfessores: any[] = [];
    professores: PoSelectOption[] = [];

    @Output() proximaTela = new EventEmitter<any>();
    @Output() voltaTela = new EventEmitter<any>();

    @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

    constructor(private disciplinaService: DisciplinaService,
                private professorService: ProfessorService,
                private turmaService: TurmaService,
                private router: Router,
                private formBuilder: FormBuilder){}

    ngOnInit(): void {

        this.disciplinasForm = this.formBuilder.group({
            nome: ['', Validators.required],
            professor: ['', Validators.required],
            cargaHoraria: ['', Validators.required]
        })

        this.disciplinas = this.disciplinaService.listarDisciplinas();

        this.listaProfessores = this.professorService.listarProfessores();

        this.listaProfessores.map(professor =>{
            this.professores = [
                ... this.professores, 
                { label: professor.nome, value: professor.nome }
            ]
        });
    }

    voltar(){
        this.voltarTela();
    }

    proximo(){
        if(this.disciplinasSelecionadas.length <= 0){
            alert("Uma turma tem que ter pelo menos uma disciplina");
        }else{
            this.turmaService.adicionarDisciplinasTurma(this.disciplinasSelecionadas);
            this.proximoTela();
        }
    }

    adicionarDisciplina(){
        this.router.navigateByUrl('cadastrar-disciplina');
    }

    eventoLista(disciplina) {
        for (let index = 0; index < this.disciplinas.length; index++) {
            const disciplinaDisponivel = this.disciplinas[index];
            
            if (disciplinaDisponivel.nome == disciplina.disciplina) {
                
                if (disciplina.selecionada ==  true) {
                    this.disciplinasSelecionadas.push(disciplinaDisponivel);
                } else {
                    let posicaoNaLista = this.disciplinasSelecionadas.indexOf(disciplinaDisponivel);
                    this.disciplinasSelecionadas.splice(posicaoNaLista, 1);
                }
            }
        }
    }

    cadastrarDisciplina(){
        let disciplina = {
            nome: this.disciplinasForm.get('nome').value,
            professor: this.disciplinasForm.get('professor').value,
            cargaHoraria: this.disciplinasForm.get('cargaHoraria').value
        }
        debugger;
        this.disciplinaService.cadastrarDisciplina(disciplina);
        this.fecharModal();
    }

    proximoTela(){
        this.proximaTela.emit();
    }
    
    voltarTela(){
        this.voltaTela.emit();
    }

    openQuestionnaire() {
        this.poModal.open();
    }

    confirmar: PoModalAction = {
        action: () => {
            this.cadastrarDisciplina();
        },
        label: 'Confirmar'
    };

    fechar: PoModalAction = {
        action: () => {
          this.fecharModal();
        },
        label: 'Fechar',
        danger: true
      };
    

      fecharModal(){
        this.poModal.close();
    }   
}