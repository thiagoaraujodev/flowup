import { Component } from '@angular/core';

@Component({
  selector: 'app-conteudos-gratuitos',
  templateUrl: './conteudos-gratuitos.component.html',
  styleUrls: ['./conteudos-gratuitos.component.css'],
})
export class ConteudosGratuitosComponent {
  abrirLink(url: string) {
    window.open(url, '_blank');
  }
}
