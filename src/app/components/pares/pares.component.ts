import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {register} from "swiper/element/bundle";
import {Peliculas} from '../../interfaces/moviesMBD';
import {ModalController} from "@ionic/angular";
import {DetallesComponent} from "../detalles/detalles.component";

register();

@Component({
  selector: 'app-pares',
  templateUrl: './pares.component.html',
  styleUrls: ['./pares.component.scss'],
})
export class ParesComponent implements OnInit {

  @Input() poster: Peliculas[] = [];
  @Output() cargamass = new EventEmitter();

  constructor( private modalCtrl: ModalController) {
  }

  ngOnInit() {
  }

  onClick() {
    this.cargamass.emit();
  }

  openModal(id: number) {
    this.modalCtrl.create({
      component: DetallesComponent,
      componentProps: {
        id
      }
    }).then(modal => modal.present());
  }
}
