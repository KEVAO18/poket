import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetPokiDataService } from '@app/get-poki-data.service';
import { NavbarComponent } from "@components/navbar/navbar.component";
import { CommonModule } from '@angular/common';

declare const bootstrap: any;

@Component({
  selector: 'app-more-poki-info',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './more-poki-info.component.html',
  styleUrl: './more-poki-info.component.scss'
})
export class MorePokiInfoComponent {

  id!: number;

  pokiData!: any;

  pokiImg!: string;

  audio!: HTMLAudioElement;

  pokiColors: any = {
    "normal": "1",
    "fighting": "2",
    "flying": "3",
    "poison": "4",
    "ground": "5",
    "rock": "6",
    "bug": "7",
    "ghost": "8",
    "steel": "9",
    "fire": "10",
    "water": "11",
    "grass": "12",
    "electric": "13",
    "psychic": "14",
    "ice": "15",
    "dragon": "16",
    "dark": "17",
    "fairy": "18",
    "stellar": "19"
  };

  constructor(private varDin: ActivatedRoute, private getPokiDataService: GetPokiDataService) { }

  ngOnInit() {
    // Escucha cambios en los parámetros de la ruta
    this.varDin.paramMap.subscribe(params => {
      const idParam = params.get('id');

      this.id = idParam ? parseInt(idParam, 10) : 0;

      this.fetchPokiData();

    });
  }

  fetchPokiData() {
    this.getPokiDataService.getOnePoki(this.id).subscribe({
      next: (response) => {
        this.pokiData = response;
        this.pokiImg = this.pokiData.sprites.other?.["official-artwork"].front_default;
        this.audio = new Audio(this.pokiData.cries.latest);
      },
      error: (error) => {
        console.error('Error al obtener los datos:', error);
      }
    });
  }
  
  cry = ()=> {
    this.audio.play();
  }


  upVolume = () => {
    let volumen = parseInt(((this.audio.volume * 100) + 1).toFixed(0));
    if (this.audio.volume < 1) this.audio.volume = (volumen / 100);
    this.getVolume();
  };
  
  downVolume = () => {
    let volumen = parseInt(((this.audio.volume * 100) - 1).toFixed(0));
    if (this.audio.volume > 0) this.audio.volume = (volumen / 100);
    this.getVolume();
  };

  getVolume = ()=> {
    const audio = new Audio(this.pokiData.cries.latest);
    const toast = document.getElementById('liveToast')
  }

  setVolume(event: Event) {
    const input = event.target as HTMLInputElement;
    const volume = parseFloat(input.value); // Obtiene el valor del rango
    if (this.audio) {
      this.audio.volume = volume; // Ajusta el volumen
    }
  }

}
