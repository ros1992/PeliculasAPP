// YApi QuickType插件生成，具体参考文档:https://plugins.jetbrains.com/plugin/18847-yapi-quicktype/documentation

export interface MoviesMBD {
    page:          number;
    total_pages:   number;
    results:       Peliculas[];
    total_results: number;
}

export interface Peliculas {
    overview:          string;
    original_language: string;
    original_title:    string;
    video:             boolean;
    title:             string;
    genre_ids:         number[];
    poster_path:       string;
    backdrop_path:     string;
    release_date:      Date;
    popularity:        number;
    vote_average:      number;
    id:                number;
    adult:             boolean;
    vote_count:        number;
}
