import { NamedApiResource } from './named-api-resource.interface';

export interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: NamedApiResource;
}
