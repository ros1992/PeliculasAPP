import {Component, Input, OnInit} from '@angular/core';
import {Peliculas} from "../../interfaces/moviesMBD";

import {register} from "swiper/element/bundle";
import {ModalController} from "@ionic/angular";
import {DetallesComponent} from "../detalles/detalles.component";

register();

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent {

  @Input() peliculas: Peliculas[] = [];

  constructor(private modalCtrl: ModalController) {
  }

  async setOpen(id: number) {
    const modal = await this.modalCtrl.create({
      component: DetallesComponent,
      componentProps: {
        id
      }
    });
    modal.present();
  }

}
