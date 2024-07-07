// YApi QuickType插件生成，具体参考文档:https://plugins.jetbrains.com/plugin/18847-yapi-quicktype/documentation

export interface MoviesMBD {
  page: number;
  total_pages: number;
  results: Peliculas[];
  total_results: number;
}

export interface Peliculas {
  overview: string;
  original_language: string;
  original_title: string;
  video: boolean;
  title: string;
  genre_ids: number[];
  poster_path: string;
  backdrop_path: string;
  release_date: Date;
  popularity: number;
  vote_average: number;
  id: number;
  adult: boolean;
  vote_count: number;
}

///////////////////////////////////////////////////////////

export interface PeliculaDetalle {
  original_language?: string;
  imdb_id?: string;
  video?: boolean;
  title?: string;
  backdrop_path?: string;
  revenue?: number;
  genres?: Genre[];
  popularity?: number;
  production_countries?: ProductionCountry[];
  id?: number;
  vote_count?: number;
  budget?: number;
  overview?: string;
  original_title?: string;
  runtime?: number;
  poster_path?: string;
  origin_country?: string[];
  spoken_languages?: SpokenLanguage[];
  production_companies?: ProductionCompany[];
  release_date?: Date;
  vote_average?: number;
  belongs_to_collection?: BelongsToCollection;
  tagline?: string;
  adult?: boolean;
  homepage?: string;
  status?: string;
}

export interface BelongsToCollection {
  backdrop_path: string;
  name: string;
  id: number;
  poster_path: string;
}

export interface Genre {
  name: string;
  id: number;
}

export interface ProductionCompany {
  logo_path?: string;
  name: string;
  id: number;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  name: string;
  iso_639_1: string;
  english_name: string;
}

////////////////////////////////////////////////////////////////////

export interface RespuestaActores {
  cast: Cast[];
  id:   number;
  crew: Cast[];
}

export interface Cast {
  cast_id?:             number;
  character?:           string;
  gender:               number;
  credit_id:            string;
  known_for_department: Department;
  original_name:        string;
  popularity:           number;
  name:                 string;
  profile_path?:        string;
  id:                   number;
  adult:                boolean;
  order?:               number;
  department?:          Department;
  job?:                 string;
}

export enum Department {
  Acting = "Acting",
  Art = "Art",
  Camera = "Camera",
  CostumeMakeUp = "Costume & Make-Up",
  Crew = "Crew",
  Directing = "Directing",
  Editing = "Editing",
  Production = "Production",
  Sound = "Sound",
  VisualEffects = "Visual Effects",
  Writing = "Writing",
}

//////////////////////////////////////////////////////////////////////////////

export interface BuscarPeli {
  page:          number;
  total_pages:   number;
  results:       Buscar[];
  total_results: number;
}

export interface Buscar {
  overview:          string;
  original_language: OriginalLanguage;
  original_title:    string;
  video:             boolean;
  title:             string;
  genre_ids:         number[];
  poster_path?:      string;
  backdrop_path?:    string;
  release_date:      string;
  popularity:        number;
  vote_average:      number;
  id:                number;
  adult:             boolean;
  vote_count:        number;
}

export enum OriginalLanguage {
  En = "en",
  Es = "es",
  Fr = "fr",
  Hi = "hi",
}
