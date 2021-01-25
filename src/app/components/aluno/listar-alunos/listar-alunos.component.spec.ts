import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { PoModule } from '@po-ui/ng-components';
import { AlunoService } from '../service/aluno.service';
import { ListarAlunosComponent } from './listar-alunos.component';
let listarAlunosComponent: ListarAlunosComponent;

describe("O component listarAlunosComponent", () =>{

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
        }).compileComponents;
    })

    beforeEach(() =>{
        const fixture = TestBed.createComponent(ListarAlunosComponent);
        listarAlunosComponent = fixture.componentInstance;
        fixture.detectChanges();
    })

    it("deve ser instanciado", () =>{
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
})
