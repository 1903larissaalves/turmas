import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { AppRotasModule } from './app.rotas.module';
import { DisciplinaModule } from './components/disciplina/disciplina.module';
import { AlunoModule } from './components/aluno/aluno.module';
import { TurmaModule } from './components/turma/turma.module';
import { ProfessorModule } from './components/professor/professor.module';
import { PoButtonModule, PoModule } from '@po-ui/ng-components';
import { ListarTurmasComponent } from './components/turma/listar-turmas/listar-turmas.component';
import { PaginaNaoEncontradaComponent } from './erros/pagina-nao-encontrada.component';
import { MensagemErroModule } from './components/shared/mensagem-erro/mensagem-erro.module';
import { StepperModule } from './components/stepper/stepper.module';
import { StepperComponent } from './components/stepper/stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListarTurmasComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRotasModule,
    RouterModule.forRoot([]),
    TurmaModule,
    DisciplinaModule, 
    ProfessorModule,
    AlunoModule,
    PoModule,
    PoButtonModule,
    StepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
