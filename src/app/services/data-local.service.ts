import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage-angular';
import {PeliculaDetalle} from '../interfaces/moviesMBD';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  public peliculas: PeliculaDetalle[] = [];
  private _storage: Storage | null = null;
  private mensajes: string = '';
  private icon: string = '';

  constructor(private storage: Storage, private toastController: ToastController) {
    this.init();
  }

  async presentToast(message: string, icon: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
      icon: icon,
      position: 'top'
    });
    toast.present();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    this.peliculas = await this.obtenerFavoritos() || [];
  }

  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  async cargarFavoritos(pelicula: PeliculaDetalle) {
    const existe = await this.existePelicula(pelicula.id);

    if (existe) {
      this.peliculas = this.peliculas.filter(localarticle => localarticle.id !== pelicula.id);
      this.mensajes = 'Película eliminada de favoritos';
      this.icon = 'trash-bin-outline';
    } else {
      this.peliculas = [pelicula, ...this.peliculas];
      this.mensajes = 'Película agregada a favoritos';
      this.icon = 'star-outline';

    }

    this.presentToast(this.mensajes, this.icon);
    this._storage?.set('peliculas', this.peliculas);

    return !existe;
  }

  async obtenerFavoritos() {
    const peliculas = await this._storage?.get('peliculas');
    this.peliculas = peliculas || [];
    return this.peliculas;
  }

  async existePelicula(id: any) {

    await this.obtenerFavoritos();
    const existe = this.peliculas.find(localarticle => localarticle.id === id);

    return existe ? true : false;
  }
}
