import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PoButtonModule, PoModule } from '@po-ui/ng-components';
import { AppComponent } from './app.component';
import { AppRotasModule } from './app.rotas.module';
import { AlunoModule } from './components/aluno/aluno.module';
import { DisciplinaModule } from './components/disciplina/disciplina.module';
import { HomeComponent } from './components/home/home.component';
import { ProfessorModule } from './components/professor/professor.module';
import { StepperModule } from './components/shared/stepper/stepper.module';
import { ListarTurmasComponent } from './components/turma/listar-turmas/listar-turmas.component';
import { TurmaModule } from './components/turma/turma.module';
import { PaginaNaoEncontradaComponent } from './erros/pagina-nao-encontrada.component';

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
