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



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
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
    PoButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
