import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PoModalAction, PoModalComponent, PoSelectOption } from '@po-ui/ng-components';

import { ProfessorService } from '../../professor/service/professor.service';
import { TurmaService } from '../../turma/service/turma.service';
import { DisciplinaService } from '../service/disciplina.service';

@Component({
    selector: 'app-listar-disciplinas',
    templateUrl: 'listar-disciplinas.component.html'
})
export class ListarDisciplinasComponents implements OnInit{

    exibindoCadastroDisciplina: boolean = true;
    exibindoCadastroProfessor: boolean = false;

    tituloModal: string ='Cadastrar nova disciplina';
    
    disciplinas: any[] = [];
    disciplinasSelecionadas: any[] = [];
    
    listaProfessores: any[] = [];
    professores: PoSelectOption[] = [];
    
    disciplinasForm: FormGroup;
    professorForm: FormGroup;

    @Output() proximaTela = new EventEmitter<any>();
    @Output() voltaTela = new EventEmitter<any>();

    @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

    constructor(private disciplinaService: DisciplinaService,
                private professorService: ProfessorService,
                private turmaService: TurmaService,
                private formBuilder: FormBuilder){}


    ngOnInit(): void {

        this.disciplinasForm = this.formBuilder.group({
            nome: ['', Validators.required],
            professor: ['', Validators.required],
            cargaHoraria: ['', Validators.required]
        });

        this.professorForm = this.formBuilder.group({
            nome: ['', Validators.required],
            titulo: ['', Validators.required]
        });

        this.disciplinas = this.disciplinaService.listarDisciplinas();

        this.atualizarListaProfessores();
    }

    irParaCadastroProfessor(){
        this.exibindoCadastroProfessor = true;
        this.exibindoCadastroDisciplina = false;
        this.tituloModal = 'Cadastrar novo professor';
    }

    voltarParaDisciplinas(){
        this.exibindoCadastroProfessor = false;
        this.exibindoCadastroDisciplina = true;
        this.tituloModal ='Cadastrar nova disciplina';
    }

    cadastrarProfessor(){
        let professor = {
            nome: this.professorForm.get('nome').value,
            titulo: this.professorForm.get('titulo').value
        }

        this.professorService.cadastrarNovoProfessor(professor);
        this.atualizarListaProfessores();
        this.voltarParaDisciplinas();
    }

    atualizarListaProfessores(){
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
        if(verificarPossuiDisciplinasSelecionadas(this.disciplinasSelecionadas.length)){
            this.turmaService.adicionarDisciplinasTurma(this.disciplinasSelecionadas);
            this.proximoTela();
        }else{
            alert("Uma turma tem que ter ao menos uma disciplina");
        }
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
        this.disciplinaService.cadastrarDisciplina(disciplina);
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
            if (this.exibindoCadastroProfessor){
                this.cadastrarProfessor();
                this.professorForm.reset();
            }else{
                this.exibindoCadastroDisciplina
                this.cadastrarDisciplina();
                this.fecharModal();
                this.disciplinasForm.reset();
            } 
        },
        label: 'Confirmar'
    };

    fechar: PoModalAction = {
        action: () => {
            if (this.exibindoCadastroProfessor){
                this.voltarParaDisciplinas();
            }else{
                this.exibindoCadastroDisciplina
                this.fecharModal();
            } 
        },
        label: 'Voltar',
        danger: true
      };
    
      fecharModal(){
        this.poModal.close();
    }   
}

export function verificarPossuiDisciplinasSelecionadas(disciplinas) {
    if(disciplinas >=1){
        return true;
    }else{
        return false;
    }
}