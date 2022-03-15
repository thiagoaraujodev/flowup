import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comece-agora-usar',
  templateUrl: './comece-agora-usar.component.html',
  styleUrls: ['./comece-agora-usar.component.css'],
})
export class ComeceAgoraUsarComponent implements OnInit {
  formulario!: FormGroup;
  submitted: boolean = false;

  innerWidth: any;
  innerHeight: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.onResize();
    this.configurarFormulario();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.formulario.invalid) {
      return;
    }

    console.log(JSON.stringify(this.formulario.value, null, 2));
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
    });
  }
}
