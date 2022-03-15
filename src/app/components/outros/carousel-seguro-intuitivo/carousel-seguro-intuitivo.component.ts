import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-seguro-intuitivo',
  templateUrl: './carousel-seguro-intuitivo.component.html',
  styleUrls: ['./carousel-seguro-intuitivo.component.css'],
})
export class CarouselSeguroIntuitivoComponent {
  slides = [
    {
      img: './../../../../assets/img/carousel/1.svg',
      alt: 'Configuração Rápida',
    },
    { img: './../../../../assets/img/carousel/2.svg', alt: '100% Seguro' },
    {
      img: './../../../../assets/img/carousel/3.svg',
      alt: 'Acesso Inteligente',
    },
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    speed: 2500,
    variableWidth: true,
    centerMode: true,
  };
}
