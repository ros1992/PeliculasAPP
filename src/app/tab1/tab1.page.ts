import {Component, OnInit} from '@angular/core';
import {ServicesPeliculasService} from "../services/services-peliculas.service";

import {Peliculas} from "../interfaces/moviesMBD";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public PeliculasMBD: Peliculas[] = [];
  public Popular: Peliculas[] = [];
  public isDatePickerOpen = false;

  constructor(private http: ServicesPeliculasService) {
  }

  ngOnInit() {

    this.populare();

    this.http.getFeature().subscribe((data) => {
      this.PeliculasMBD = data.results;
    })
  }

  populare() {
    this.http.getPopular().subscribe((data) => {
      const arrTemp = [...this.Popular, ...data.results];
      this.Popular = arrTemp;
    })
  }

  openDatePicker() {
    this.isDatePickerOpen = true;
  }

  closeDatePicker() {
    this.isDatePickerOpen = false;
  }

  dateChanged(event: any) {
    console.log('Fecha seleccionada:', event.detail.value);
    this.closeDatePicker();
  }

  cargarMas() {
    this.populare();
  }

}
