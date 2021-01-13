import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { AlunoService } from '../Aluno.service';

@Component({
    templateUrl: 'listar-alunos.component.html'
})
export class ListarAlunosComponent implements OnInit{

    alunos: any[] = [];

    @ViewChild('optionsForm', { static: true }) form: NgForm;
    
    @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

    constructor(private alunoService: AlunoService,
                private router: Router){}

    ngOnInit(): void {
        this.alunos = this.alunoService.listarAlunos();
        console.log(this.alunoService);
    }

    cancelar(){
        this.router.navigateByUrl('listar-disciplinas');
    }

    finalizarTurma(){
        this.router.navigateByUrl('');
    }

    openQuestionnaire() {
        this.poModal.open();
    }

    cadastrarAluno(){
        console.log("entrou no cadastrar");
        
    }

    confirmar: PoModalAction = {
    action: () => {
        this.cadastrarAluno();
    },
    label: 'confirmar'
    };

    fecharModal() {
        this.form.reset();
        this.poModal.close();
    }

    close: PoModalAction = {
        action: () => {
          this.fecharModal();
        },
        label: 'Cancelar',
        danger: true
    };
    
}