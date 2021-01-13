import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PoButtonModule } from '@po-ui/ng-components';

import { HomeComponent } from './components/home/home.component';
import { CadastrarTurmaComponent } from './components/turma/cadastrar-turma/cadastrar-turma.component';
import { AppRotasModule } from './app.rotas.module';
import { ListarDisciplinasComponents } from './components/disciplina/listar-disciplinas/listar-disciplinas.component';
import { DisciplinaComponent } from './components/disciplina/disciplina/disciplina.component';
import { AlunoComponent } from './components/aluno/aluno/aluno.component';
import { ListarAlunosComponent } from './components/aluno/listar-alunos/listar-alunos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastrarTurmaComponent,
    DisciplinaComponent,
    ListarDisciplinasComponents,
    AlunoComponent,
    ListarAlunosComponent
  ],
  imports: [
    BrowserModule,
    PoModule,
    PoButtonModule,
    AppRotasModule,
    RouterModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
