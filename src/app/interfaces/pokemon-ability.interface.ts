import { NamedApiResource } from './named-api-resource.interface';

export interface PokemonAbility {
    ability: NamedApiResource;
    is_hidden: boolean;
    slot: number;
}
