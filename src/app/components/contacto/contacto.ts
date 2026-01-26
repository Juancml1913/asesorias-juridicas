import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.scss',
})
export class Contacto {
  contactForm: FormGroup;
  formSubmitted = signal(false);
  private whatsappNumber = '573017038693';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.email]],
      telefono: [''],
      asunto: [''],
      mensaje: ['', [Validators.required]],
    });
  }

  contactInfo = [
    {
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      label: 'Teléfono',
      value: '+57 301 703 8693',
    },
    {
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      label: 'Email',
      value: 'abogada.danieladavidm@gmail.com',
    },
    {
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      label: 'Dirección',
      value:
        'Carrera 48  Nº50-68 Oficina 301 Edificio Centro Comercial la playa Nº2. Medellín - Antioquia.',
    },
    {
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      label: 'Horario',
      value: 'Lun - Vie: 9:00 - 19:00',
    },
  ];

  asuntos = [
    'Derecho Civil',
    'Derecho Penal',
    'Derecho Laboral',
    'Derecho Familiar',
    'Derecho Mercantil',
    'Otro',
  ];

  get f() {
    return this.contactForm.controls;
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getErrorMessage(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (!field) return '';

    if (field.hasError('required')) {
      return 'Este campo es obligatorio';
    }
    if (field.hasError('email')) {
      return 'Ingrese un correo electrónico válido';
    }
    if (field.hasError('minlength')) {
      const minLength = field.getError('minlength').requiredLength;
      return `Debe tener al menos ${minLength} caracteres`;
    }
    return '';
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const { nombre, email, telefono, asunto, mensaje } = this.contactForm.value;

    const text = `
*Nueva Consulta Legal*
━━━━━━━━━━━━━━━━━━

*Nombre:* ${nombre}
*Email:* ${email}
*Teléfono:* ${telefono || 'No proporcionado'}
*Área de Consulta:* ${asunto}

*Mensaje:*
${mensaje}

━━━━━━━━━━━━━━━━━━
_Enviado desde el formulario web_
    `.trim();

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${this.whatsappNumber}&text=${encodedText}`;

    window.open(whatsappUrl, '_blank');

    this.formSubmitted.set(true);
    setTimeout(() => {
      this.formSubmitted.set(false);
      this.contactForm.reset();
    }, 5000);
  }
}
