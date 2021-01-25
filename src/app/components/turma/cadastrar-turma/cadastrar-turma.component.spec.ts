import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { PoModule } from '@po-ui/ng-components';
import { TurmaService } from '../service/turma.service';
import { CadastrarTurmaComponent } from './cadastrar-turma.component';

let cadastrarTurmaComponent: CadastrarTurmaComponent;

describe("O component cadastrar-turma", () => {
    
    beforeEach(async() => {
        TestBed.configureTestingModule({
            declarations: [ CadastrarTurmaComponent ],
            providers: [ TurmaService ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                PoModule,
                RouterTestingModule.withRoutes([]),
            ]
        }).compileComponents;
    })

    beforeEach(() =>{
        const fixture = TestBed.createComponent(CadastrarTurmaComponent);
        cadastrarTurmaComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("deve ser instanciado", () => {
        expect(cadastrarTurmaComponent).toBeTruthy();
    });

    it("deve confirmar se todos campos do formulario foram preenchidos", () => {
        expect(cadastrarTurmaComponent.turmaForm.invalid).toBeTruthy();
    });

    it("deve confirmar se campos do formulario nao foram preenchidos", () => {
        expect(cadastrarTurmaComponent.turmaForm.valid).toBeFalsy();
    });

})