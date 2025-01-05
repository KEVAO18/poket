import { CommonModule } from '@angular/common';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GetPokiDataService } from '@app/get-poki-data.service';
import { NavbarComponent } from "@components/navbar/navbar.component";
import { PokiCardComponent } from "@components/poki-card/poki-card.component";
import { AsideComponent } from "../aside/aside.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PokiCardComponent, CommonModule, NavbarComponent, RouterLink, AsideComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  pokiData!: any;

  limit: any = 27;

  multi!: number;

  offset!: number;

  next!: number;

  shy!: number;

  cargaCompleta: boolean = false;

  constructor(private getPokiDataService: GetPokiDataService, private varDin: ActivatedRoute) { }

  ngOnInit() {
    // Escucha cambios en los parámetros de la ruta
    this.varDin.paramMap.subscribe(params => {
      const offsetParam = params.get('offset');
      const shyParam = params.get('shy');
      this.multi = offsetParam ? parseInt(offsetParam, 10) : 1;

      // Calcula el offset y la página siguiente
      this.offset = this.multi === 1 ? 0 : (this.multi - 1) * this.limit;
      this.next = this.multi + 1;
      this.shy = shyParam ? parseInt(shyParam, 10) : 0;

      // Llama al servicio para obtener datos actualizados
      this.fetchPokiData();
    });
  }

  fetchPokiData() {
    this.getPokiDataService.getPokiData(this.limit, this.offset).subscribe({
      next: (response) => {
        this.pokiData = response;
        this.cargaCompleta = true;
      },
      error: (error) => {
        console.error('Error al obtener los datos:', error);
      }
    });
  }

}
