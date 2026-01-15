import { Component } from '@angular/core';

interface Servicio {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-servicios',
  imports: [],
  templateUrl: './servicios.html',
  styleUrl: './servicios.scss',
})
export class Servicios {
  servicios: Servicio[] = [
    {
      icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
      title: 'Consulta Legal',
      description: 'Asesoria personalizada para evaluar su situacion juridica y definir la mejor estrategia.',
      features: ['Analisis inicial del caso', 'Evaluacion de opciones', 'Recomendaciones estrategicas', 'Primera consulta gratuita']
    },
    {
      icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
      title: 'Representacion Legal',
      description: 'Defensa profesional de sus intereses ante tribunales y autoridades competentes.',
      features: ['Litigio civil y mercantil', 'Defensa penal', 'Procedimientos laborales', 'Recursos y apelaciones']
    },
    {
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
      title: 'Gestion Documental',
      description: 'Elaboracion y revision de documentos legales con los mas altos estandares.',
      features: ['Redaccion de contratos', 'Revision de documentos', 'Poderes y escrituras', 'Certificaciones legales']
    }
  ];

  proceso = [
    { number: '01', title: 'Contacto Inicial', description: 'Agende una consulta gratuita para conocer su caso.' },
    { number: '02', title: 'Evaluacion', description: 'Analizamos su situacion y definimos la mejor estrategia.' },
    { number: '03', title: 'Plan de Accion', description: 'Desarrollamos un plan juridico personalizado.' },
    { number: '04', title: 'Ejecucion', description: 'Implementamos la estrategia con seguimiento continuo.' }
  ];
}
