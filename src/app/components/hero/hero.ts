import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  stats = [
    { value: '5+', label: 'Años de Experiencia' },
    { value: '50+', label: 'Casos Resueltos' },
    { value: '98%', label: 'Clientes Satisfechos' },
  ];
}
