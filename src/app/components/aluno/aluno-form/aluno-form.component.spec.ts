import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PoModule } from '@po-ui/ng-components';
import { AlunoService } from '../service/aluno.service';
import { AlunoFormComponent } from './aluno-form.component';

let alunoFormComponent: AlunoFormComponent;

describe("AlunoFormComponent", () =>{

    beforeEach(async() => {
        TestBed.configureTestingModule({
            declarations: [ AlunoFormComponent ],
            providers: [ AlunoService ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                PoModule,
                RouterTestingModule.withRoutes([])
            ]
        }).compileComponents();
    });

    beforeEach(() =>{
        const fixture = TestBed.createComponent(AlunoFormComponent);
        alunoFormComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("deve criar componente", () =>{
        expect(alunoFormComponent).toBeTruthy();
    });

    it("deve verificar se foram selecionados alunos para a turma",
     () =>{
        expect(alunoFormComponent.verificarAlunosSelecionados()).toBeFalsy();
    });

    it("deve confirmar se ha vagas na turma", () =>{
        const vagas = 1;
        const numeroAlunos = 1;
        expect(alunoFormComponent.verificarVagasTurma(vagas, numeroAlunos)).toBeTruthy();
    }); 
    
    it("deve confirmar se nao ha vagas na turma", () =>{
        const vagas = 1;
        const numeroAlunos = 2;
        expect(alunoFormComponent.verificarVagasTurma(vagas, numeroAlunos)).toBeFalsy();
    });

    it('deve confirmar se foi gerado o numero de matricula', () => {
        expect(alunoFormComponent.gerarNumeroMatriculaAluno()).toBeTruthy();
    });

    it('deve confirmar se o formulario estiver invalido', () => {
        alunoFormComponent.alunoForm.get('nome').setValue('');
        expect(alunoFormComponent.cadastrarAluno()).toBeFalsy();
    });
    
});
