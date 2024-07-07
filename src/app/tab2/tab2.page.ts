import {Component} from '@angular/core';
import {ServicesPeliculasService} from "../services/services-peliculas.service";
import {Buscar, Peliculas} from "../interfaces/moviesMBD";
import {DetallesComponent} from "../components/detalles/detalles.component";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public textoBuscar: string = '';
  public peliculas: Buscar[] = [];
  public ideas: string[] = ['Spiderman', 'Superman', 'El señor de los anillos', 'La vida es bella', 'Batman'];
  public buscando: boolean = false; //Indica si estamos buscando

  constructor(private http: ServicesPeliculasService, private modalCtrl: ModalController) {
  }

  buscar(event: any) {
    this.textoBuscar = event.target.value;
    this.buscando = true;
    this.http.getBuscarPeli(this.textoBuscar).subscribe(resp => {
      this.peliculas = resp['results'];
      this.buscando = false;
    })
  }

  async detalle(id: number) {
    const modal = await this.modalCtrl.create({
      component: DetallesComponent,
      componentProps: {
        id
      }
    });
    modal.present();
  }

}
