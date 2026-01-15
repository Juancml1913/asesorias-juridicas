import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { AreasPractica } from './components/areas-practica/areas-practica';
import { SobreMi } from './components/sobre-mi/sobre-mi';
import { Servicios } from './components/servicios/servicios';
import { Contacto } from './components/contacto/contacto';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, AreasPractica, SobreMi, Servicios, Contacto, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
