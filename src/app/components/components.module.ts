import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from "@ionic/angular";
import {SlideshowBackdropComponent} from "./slideshow-backdrop/slideshow-backdrop.component";
import {ImagenPipe} from "../pipes/imagen.pipe";

import {PipesModule} from "../pipes/pipes.module";

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import {SlideshowPosterComponent} from "./slideshow-poster/slideshow-poster.component";
import {ParesPipe} from "../pipes/pares.pipe";
import {ParesComponent} from "./pares/pares.component";
import {DetallesComponent} from "./detalles/detalles.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    ParesComponent,
    DetallesComponent
  ],
  exports: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    ParesComponent,
    DetallesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ImagenPipe,
    PipesModule,
    ParesPipe,
    FormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class ComponentsModule { }
