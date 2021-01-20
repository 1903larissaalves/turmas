import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PoModule } from '@po-ui/ng-components';
import { TurmaModule } from '../../turma/turma.module';
import { StepperComponent } from './stepper.component';
import { StepperRoutingModule } from './stepper-routing.module';
import { DisciplinaModule } from '../../disciplina/disciplina.module';
import { AlunoModule } from '../../aluno/aluno.module';

@NgModule({
    declarations: [
        StepperComponent
    ],
    imports: [
        CommonModule,
        PoModule,
        TurmaModule,
        StepperRoutingModule,
        DisciplinaModule,
        AlunoModule
    ],
    exports: [
        StepperComponent
    ]
})
export class StepperModule { }