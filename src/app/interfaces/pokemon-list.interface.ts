import { NamedApiResource } from './named-api-resource.interface';

export interface PokemonList {
    count: number;
    previous: string | null;
    next: string;
    results: NamedApiResource[];
}
