import { Component } from '@angular/core';
import { PortifolioComponent } from './portifolio/portifolio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PortifolioComponent],   // importa o componente aqui
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
