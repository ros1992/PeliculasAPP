import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {ServicesPeliculasService} from "../../services/services-peliculas.service";
import {Cast, PeliculaDetalle} from "../../interfaces/moviesMBD";

import {DataLocalService} from "../../services/data-local.service";

import {register} from "swiper/element/bundle";


register();

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent implements OnInit {

  @Input() id: string = '';
  public name: string = '';
  public PeliculaDetalles: PeliculaDetalle = {};
  public PelicualActores: Cast[] = [];
  public oculto = 150;
  public stars = 'star-outline';

  constructor(private modalCtrl: ModalController,
              private SercicesPelicula: ServicesPeliculasService,
              private dataLocal: DataLocalService
  ) {
  }

  ngOnInit() {
    this.comprobarFavorito();

    this.SercicesPelicula.getDetalle(this.id).subscribe(data => {
      this.PeliculaDetalles = data;
    })

    this.SercicesPelicula.getactores(this.id).subscribe(data => {
      this.PelicualActores = data.cast;
    })

  }

  comprobarFavorito() {
    // Verifica si la película existe
    this.dataLocal.existePelicula(this.id).then(valor => this.stars = (valor) ? 'star' : 'star-outline')
  }

  regresar() {
    return this.modalCtrl.dismiss();
  }

  async favoritos() {

    const existe = await this.dataLocal.cargarFavoritos(this.PeliculaDetalles);
    this.stars = (existe) ? 'star' : 'star-outline';
  }

}
