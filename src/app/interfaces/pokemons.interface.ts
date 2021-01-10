import { PokemonList } from './pokemon-list.interface';
import { PokemonDetail } from './pokemon-detail.interface';

export interface Pokemons extends PokemonList {
    details: PokemonDetail[];
}
