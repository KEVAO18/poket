import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-poki-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './poki-card.component.html',
  styleUrl: './poki-card.component.scss'
})
export class PokiCardComponent {

  @Input() pokiData!: any;

  @Input() pokiId!: number;

  img?: string;

  @Input() shy!: number;

  constructor() {
  }

}
