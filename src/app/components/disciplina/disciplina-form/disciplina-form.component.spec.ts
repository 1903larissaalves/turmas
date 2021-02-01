import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoModule } from '@po-ui/ng-components';
import { DisciplinaService } from '../service/disciplina.service';
import { DisciplinaFormComponents } from './disciplina-form.component';

let disciplinaFormComponents: DisciplinaFormComponents;

describe("ListarDisciplinasComponents", () => {

    beforeEach(async() => {
        TestBed.configureTestingModule({
            declarations: [ DisciplinaFormComponents ],
            providers: [ DisciplinaService ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                PoModule
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        const fixture = TestBed.createComponent(DisciplinaFormComponents);
        disciplinaFormComponents = fixture.componentInstance;
        fixture.detectChanges();
    }); 

    it("deve criar componente", () =>{
        expect(disciplinaFormComponents).toBeTruthy();
    });

    it('deve confirmar se ha disciplinas para cadastrar nova turma', () => {
        const disciplinas = 1;
        expect(disciplinaFormComponents.verificarPossuiDisciplinasSelecionadas(disciplinas)).toBeTruthy();
    });

    it("deve confirmar se nao ha disciplinas para cadastrar nova turma", () =>{
        const disciplinas = 0;
        expect(disciplinaFormComponents.verificarPossuiDisciplinasSelecionadas(disciplinas)).toBeFalsy();
    });

    it('deve retornar erro se o formulario de disciplinas estiver invalido', () => {
        expect(disciplinaFormComponents.disciplinasForm.invalid).toBeTruthy();
    });

    it('deve retornar erro se o formulario de professor estiver invalido', () => {
        expect(disciplinaFormComponents.professorForm.invalid).toBeTruthy();
    });

    it('deve confirmar atualizacao lista professores', () => {
        expect(disciplinaFormComponents.atualizarListaProfessores()).toBeTruthy();
    });

});
