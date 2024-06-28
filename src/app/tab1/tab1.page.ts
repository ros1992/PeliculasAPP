import {Component, OnInit} from '@angular/core';
import {ServicesPeliculasService} from "../services/services-peliculas.service";

import {register} from "swiper/element/bundle";
import {Peliculas} from "../interfaces/moviesMBD";

register();

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public PeliculasMBD: Peliculas[] = [];
  public isDatePickerOpen = false;

  constructor(private http: ServicesPeliculasService) {
  }

  ngOnInit() {

    this.http.getFeature().subscribe((data) => {
      console.log(data);
      this.PeliculasMBD = data.results;
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

}
