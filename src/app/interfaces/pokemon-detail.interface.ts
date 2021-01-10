import { PokemonAbility } from './pokemon-ability.interface';
import { PokemonHeldItem } from './pokemon-held-item.interface';
import { PokemonMove } from './pokemon-move.interface';
import { PokemonType } from './pokemon-type.interface';
import { PokemonStat } from './pokemon-stat.interface';
import { PokemonSprites } from './pokemon-sprites.interface';

export interface PokemonDetail {
    id: number;
    abilities: PokemonAbility[];
    base_experience: number;
    height: number;
    weight: number;
    held_items: PokemonHeldItem[];
    moves: PokemonMove[];
    name: string;
    sprites: PokemonSprites;
    stats: PokemonStat[];
    types: PokemonType[];
}
