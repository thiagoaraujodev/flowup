import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-melhor-software',
  templateUrl: './melhor-software.component.html',
  styleUrls: ['./melhor-software.component.css'],
})
export class MelhorSoftwareComponent implements OnInit {
  innerWidth: any;
  innerHeight: any;

  constructor() {}

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }
}
