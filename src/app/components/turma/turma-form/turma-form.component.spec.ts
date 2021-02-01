import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { PoModule } from '@po-ui/ng-components';
import { TurmaService } from '../service/turma.service';
import { TurmaFormComponent } from './turma-form.component';

let turmaFormComponent: TurmaFormComponent;

describe("CadastrarTurmaComponent", () => {
    
    beforeEach(async() => {
        TestBed.configureTestingModule({
            declarations: [ TurmaFormComponent ],
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
        const fixture = TestBed.createComponent(TurmaFormComponent);
        turmaFormComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("deve criar componente", () => {
        expect(turmaFormComponent).toBeTruthy();
    });

    it("deve confirmar se os formulario foram preenchidos", () => {
        expect(turmaFormComponent.turmaForm.invalid).toBeTruthy();
    });

    it("deve confirmar se os formulario nao foram preenchidos", () => {
        expect(turmaFormComponent.turmaForm.valid).toBeFalsy();
    });

    it("deve confirmar que a turma tenha vagas", () => {
        let vagas = turmaFormComponent.turmaForm.get('vagas').setValue(0);
        expect(vagas).toBeFalsy();
    });

});