import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-time',
  templateUrl: './card-time.component.html',
  styleUrls: ['./card-time.component.css'],
})
export class CardTimeComponent implements OnInit {
  @Input() cardColor: string = '';
  bgColorClass: string = '';
  bgColorContentClass: string = '';
  colorClass: string = '';
  borderColorClass: string = '';
  imgPeople: string = '';

  startTimer: boolean = false;
  intervalo: any;
  minuto: number = 0;
  segundo: number = 0;

  constructor() {}

  ngOnInit(): void {
    if (this.cardColor === 'blue') {
      this.bgColorClass = 'bg-blue';
      this.bgColorContentClass = 'bg-blue-content';
      this.colorClass = 'color-blue';
      this.borderColorClass = 'border-blue';
      this.imgPeople = 'person2.webp';
    } else if (this.cardColor === 'orange') {
      this.bgColorClass = 'bg-orange';
      this.bgColorContentClass = 'bg-orange-content';
      this.colorClass = 'color-orange';
      this.borderColorClass = 'border-orange';
      this.imgPeople = 'person8.webp';
    } else if (this.cardColor === 'green') {
      this.bgColorClass = 'bg-green';
      this.bgColorContentClass = 'bg-green-content';
      this.colorClass = 'color-green';
      this.borderColorClass = 'border-green';
      this.imgPeople = 'person1.webp';
    }
  }

  //mouse hover
  startHover() {
    this.startTimer = true;

    this.intervalo = setInterval(() => {
      if (this.segundo >= 59) {
        this.segundo = 0;

        if (this.minuto >= 59) {
          this.minuto = 0;
        } else {
          this.minuto++;
        }
      } else {
        this.segundo++;
      }
    }, 1000);
  }

  stopHover() {
    this.startTimer = false;
    this.segundo = 0;
    this.minuto = 0;

    clearInterval(this.intervalo);
  }
}
