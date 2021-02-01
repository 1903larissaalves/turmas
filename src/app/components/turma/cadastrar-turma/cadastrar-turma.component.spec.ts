import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { PoModule } from '@po-ui/ng-components';
import { TurmaService } from '../service/turma.service';
import { CadastrarTurmaComponent } from './cadastrar-turma.component';

let cadastrarTurmaComponent: CadastrarTurmaComponent;

describe("CadastrarTurmaComponent", () => {
    
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
        }).compileComponents();
    });

    beforeEach(() =>{
        const fixture = TestBed.createComponent(CadastrarTurmaComponent);
        cadastrarTurmaComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("deve criar componente", () => {
        expect(cadastrarTurmaComponent).toBeTruthy();
    });

    it("deve confirmar se os formulario foram preenchidos", () => {
        expect(cadastrarTurmaComponent.turmaForm.invalid).toBeTruthy();
    });

    it("deve confirmar se os formulario nao foram preenchidos", () => {
        expect(cadastrarTurmaComponent.turmaForm.valid).toBeFalsy();
    });

    it("deve confirmar que a turma tenha vagas", () => {
        let vagas = cadastrarTurmaComponent.turmaForm.get('vagas').setValue(0);
        expect(vagas).toBeFalsy();
    });

});