import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Areas de Practica', href: '#areas' },
    { label: 'Sobre Mi', href: '#sobre-mi' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Contacto', href: '#contacto' }
  ];

  areasLinks = [
    { label: 'Derecho Civil', href: '#areas' },
    { label: 'Derecho Penal', href: '#areas' },
    { label: 'Derecho Laboral', href: '#areas' },
    { label: 'Derecho Familiar', href: '#areas' },
    { label: 'Derecho Mercantil', href: '#areas' }
  ];
}
