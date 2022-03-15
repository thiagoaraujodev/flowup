import { Component, Input, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  elemento: any;
  ImgIntegreFuncionalidade: string = 'dashboard.svg';
  pIntegreFuncionalidade: string =
    'Visualize e acompanhe o andamento das suas tarefas e da sua equipe em uma única tela, com atalhos e visualizações rápidas das principais informações';

  constructor() {}

  ngOnInit(): void {}

  // usar as cores difinidas no @input() cardColor: 'blue' 'orange' ou 'green'
  colunaA = ['blue', 'orange', 'green'];
  colunaB = ['orange'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  // integre-funcionalidades
  clicked(event: any, numeroImg: number) {
    this.elemento = document.querySelector('p.active') as HTMLElement;
    this.elemento.classList.remove('active');
    event.target.classList.add('active');

    switch (numeroImg) {
      case 1:
        this.ImgIntegreFuncionalidade = 'dashboard.svg';
        this.pIntegreFuncionalidade =
          'Visualize e acompanhe o andamento das suas tarefas e da sua equipe em uma única tela, com atalhos e visualizações rápidas das principais informações';
        break;
      case 2:
        this.ImgIntegreFuncionalidade = 'modelos_quadros.svg';
        this.pIntegreFuncionalidade =
          'Utilize os quadros Kanban ou Diagrama de Gantt para fazer uma gestão de projetos colaborativa e engaje toda a sua equipe, em segundos, quantas vezes e quando quiser.';
        break;
      case 3:
        this.ImgIntegreFuncionalidade = 'automação_tarefas.svg';
        this.pIntegreFuncionalidade =
          'Estabeleça rotinas ao automatizar tarefas, garantindo a sua produtividade e da sua equipe.';

        break;
      case 4:
        this.ImgIntegreFuncionalidade = 'reportagem_horas.svg';
        this.pIntegreFuncionalidade =
          'Sem perder tempo. Acompanhe o tempo de trabalho dos colaboradores em cada tarefa ou projeto, garantindo o cumprimento das horas previstas e gerenciando a utilização de horas excedentes.';

        break;
      case 5:
        this.ImgIntegreFuncionalidade = 'compartilhamento_arquivos.svg';
        this.pIntegreFuncionalidade =
          'Compartilhe arquivos diretamente do FlowUp e centralize o contato através de uma só ferramenta. Seu cliente pode comentar se aprova ou pedir alterações.';

        break;
      default:
        this.ImgIntegreFuncionalidade = 'dashboard.svg';
        this.pIntegreFuncionalidade =
          'Visualize e acompanhe o andamento das suas tarefas e da sua equipe em uma única tela, com atalhos e visualizações rápidas das principais informações';
    }
  }
}
