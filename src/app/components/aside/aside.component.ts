import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GetPokiDataService } from '@app/get-poki-data.service';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {

  pokiData!: any;

  constructor(private getPokiData: GetPokiDataService) { }

  ngOnInit() {
    this.fetchPokiData();
  }

  fetchPokiData() {
    this.getPokiData.getAllOfOne('type').subscribe({
      next: (response) => {
        this.pokiData = response.results.filter((poki: any) => poki.name !== 'unknown');
      },
      error: (error) => {
        console.error('Error al obtener los datos:', error);
      }
    });
  }

}
