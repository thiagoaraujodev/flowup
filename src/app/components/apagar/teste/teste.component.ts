import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css'],
})
export class TesteComponent implements OnInit {
  status: boolean = false;
  intervalo: any;

  public fixed: boolean = false;

  // public panelElements: any;

  constructor(
    private _config: NgbAccordionConfig,
    @Inject(DOCUMENT) private doc: Document
  ) {
    _config.closeOthers = true;
  }

  ngOnInit(): void {}

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

  //
  //

  clicked(event: any) {
    // let foco = document.getElementById('teste') as HTMLElement;
    // console.log(foco);
    // event.target.focus();
    // console.log(event);
    // event.target.animate({ scrollTop: 300 }, 500);
  }

  // @HostListener('window:scroll')
  // checkScroll() {

  //   const scrollPosition =
  //     window.pageYOffset ||
  //     document.documentElement.scrollTop ||
  //     document.body.scrollTop ||
  //     0;

  //   console.log('[scroll]', scrollPosition);

  //   if (scrollPosition >= this.topPosToStartShowing) {
  //     this.isShow = true;
  //   } else {
  //     this.isShow = false;
  //   }
  // }

  // TODO: Cross browsing
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  //lol
  scrollMove(seletor: string, valueTop: number) {
    const scroller = document.querySelector(seletor) as HTMLElement;
    console.log(scroller);

    scroller.scroll({
      top: valueTop,
      left: 0,
      behavior: 'smooth',
    });
  }

  //
  ScrollIntoView(elem: string) {
    console.log(elem);
    let foco = document.querySelector(elem) as HTMLElement;
    // foco.scrollIntoView({ behavior: 'smooth', block: 'start' });
    var top = window.pageYOffset;
    var top2 = document.documentElement.scrollTop;
    console.log(top + ' - ' + top2);

    if (window.pageYOffset > 0) {
      console.log(top + ' - ' + top2);

      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }

  ///
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // let foco = document.querySelector('.navbar-collapse') as HTMLElement;
    // console.log('foco: ' + foco.scrollTop);

    // let num = document.body.scrollTop;
    // if (num > 50) {
    //   this.fixed = true;
    // } else if (this.fixed && num < 5) {
    //   this.fixed = false;
    // }
    // console.log(num);

    ///
    const scroller = document.querySelector('.scroller') as HTMLElement;
    const scroller2 = document.querySelector('#navbarBotaoMenu') as HTMLElement;
    const output = document.querySelector('#output') as HTMLElement;

    scroller.addEventListener('scroll', (event) => {
      console.log(`scrollTop: ${scroller.scrollTop}`);
      console.log(`scrollTop: ${scroller2.scrollTop}`);
      output.textContent = `scrollTop: ${scroller.scrollTop}`;
    });
  }

  //////
}
