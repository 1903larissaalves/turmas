import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoModule } from '@po-ui/ng-components';
import { DisciplinaService } from '../service/disciplina.service';
import { ListarDisciplinasComponents } from './listar-disciplinas.component';

let listarDisciplinasComponents: ListarDisciplinasComponents;

describe("ListarDisciplinasComponents", () => {

    beforeEach(async() => {
        TestBed.configureTestingModule({
            declarations: [ ListarDisciplinasComponents ],
            providers: [ DisciplinaService ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                PoModule
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        const fixture = TestBed.createComponent(ListarDisciplinasComponents);
        listarDisciplinasComponents = fixture.componentInstance;
        fixture.detectChanges();
    }); 

    it("deve criar componente", () =>{
        expect(listarDisciplinasComponents).toBeTruthy();
    });

    it('deve confirmar se ha disciplinas para cadastrar nova turma', () => {
        const disciplinas = 1;
        expect(listarDisciplinasComponents.verificarPossuiDisciplinasSelecionadas(disciplinas)).toBeTruthy();
    });

    it("deve confirmar se nao ha disciplinas para cadastrar nova turma", () =>{
        const disciplinas = 0;
        expect(listarDisciplinasComponents.verificarPossuiDisciplinasSelecionadas(disciplinas)).toBeFalsy();
    });

});
