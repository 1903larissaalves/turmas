import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PoButtonModule } from '@po-ui/ng-components';

import { HomeComponent } from './components/home/home.component';
import { CadastrarTurmaComponent } from './components/turma/cadastrar-turma/cadastrar-turma.component';
import { AppRotasModule } from './app.rotas.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastrarTurmaComponent
  ],
  imports: [
    BrowserModule,
    PoModule,
    PoButtonModule,
    AppRotasModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
