import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  status: boolean = false;
  intervalo: any;

  constructor() {}

  ngOnInit(): void {}

  //abre link em nova aba
  abrirLink(url: string) {
    window.open(url, '_blank');
  }

  closeHover() {
    this.status = true;

    this.intervalo = setInterval(() => {
      this.status = false;
      clearInterval(this.intervalo);
    }, 100);
  }

  //scroll usado no menu
  scrollMove(seletor: string, valueTop: number) {
    const scroller = document.querySelector(seletor) as HTMLElement;

    scroller.scroll({
      top: valueTop,
      left: 0,
      behavior: 'smooth',
    });
  }

  //scroll  da pagina
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
