import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productos = [
    {
      nombre: 'Nopal',
      portada: '/assets/image/producto/bolsaNopal.png',
      presentacions: [
        { id: 1, nombre: '50 grms.' },
        { id: 2, nombre: '300 grms.' }
      ],
      descripcion: 'Nopal deshidratado con chile.',
      precio: 25
    },
    {
      nombre: 'Mango',
      portada: '/assets/image/producto/bolsaMango.png',
      presentacions: [
        { id: 1, nombre: '50 grms.' },
        { id: 2, nombre: '300 grms.' }
      ],
      descripcion: 'Mango deshidratado con chile.',
      precio: 25
    },
    {
      nombre: 'Arandano',
      portada: '/assets/image/producto/bolsaArandano.png',
      presentacions: [
        { id: 1, nombre: '50 grms.' },
        { id: 2, nombre: '300 grms.' }
      ],
      descripcion: 'Arandano deshidratado con chile.',
      precio: 25
    },
    {
      nombre: 'Pepita de Calabaza',
      portada: '/assets/image/producto/bolsaCalabaza.png',
      presentacions: [
        { id: 1, nombre: '50 grms.' },
        { id: 2, nombre: '300 grms.' }
      ],
      descripcion: 'Pepita de Calabaza sin cascara.',
      precio: 25
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
