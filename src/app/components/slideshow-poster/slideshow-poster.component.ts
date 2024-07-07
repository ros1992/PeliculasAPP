import {Component, Input, OnInit} from '@angular/core';

import {register} from "swiper/element/bundle";
import { Peliculas} from '../../interfaces/moviesMBD';
import {DetallesComponent} from "../detalles/detalles.component";
import {ModalController} from "@ionic/angular";

register();

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent {

  @Input() poster: Peliculas[] = [];

  constructor(private modalCtrl: ModalController) { }


  async openModal(id: number){
    const modal = await this.modalCtrl.create({
      component: DetallesComponent,
      componentProps: {
        id
      }
    }) ;
    modal.present();
  }

}
