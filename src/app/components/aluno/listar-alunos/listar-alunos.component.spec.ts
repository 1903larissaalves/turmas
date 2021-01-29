import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PoModule } from '@po-ui/ng-components';
import { AlunoService } from '../service/aluno.service';
import { ListarAlunosComponent } from './listar-alunos.component';

let listarAlunosComponent: ListarAlunosComponent;

describe("ListarAlunosComponent", () =>{

    beforeEach(async() => {
        TestBed.configureTestingModule({
            declarations: [ ListarAlunosComponent ],
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
        const fixture = TestBed.createComponent(ListarAlunosComponent);
        listarAlunosComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("deve criar componente", () =>{
        expect(listarAlunosComponent).toBeTruthy();
    });

    it("deve verificar se foram selecionados alunos para a turma",
     () =>{
        expect(listarAlunosComponent.verificarAlunosSelecionados()).toBeFalsy();
    });

    it("deve confirmar se ha vagas na turma", () =>{
        const vagas = 1;
        const numeroAlunos = 1;
        expect(listarAlunosComponent.verificarVagasTurma(vagas, numeroAlunos)).toBeTruthy();
    }); 
    
    it("deve confirmar se nao ha vagas na turma", () =>{
        const vagas = 1;
        const numeroAlunos = 2;
        expect(listarAlunosComponent.verificarVagasTurma(vagas, numeroAlunos)).toBeFalsy();
    });

    it('deve confirmar se foi gerado o numero de matricula', () => {
        expect(listarAlunosComponent.gerarNumeroMatriculaAluno()).toBeTruthy();
    });

    it('deve confirmar se o formulario estiver invalido', () => {
        listarAlunosComponent.alunoForm.get('nome').setValue('');
        expect(listarAlunosComponent.cadastrarAluno()).toBeFalsy();
    });
    
});
