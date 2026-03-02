import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent {

  services = [
    'Instalaciones de Red',
    'Soporte a Equipos',
    'Mantenimientos Preventivos',
    'Sistemas de Seguridad'
  ];
}