import { NamedApiResource } from './named-api-resource.interface';
import { PokemonHeldItemVersionDetail } from './pokemon-held-item-version-detail.interface';

export interface PokemonHeldItem {
    item: NamedApiResource;
    versionDetails: PokemonHeldItemVersionDetail[];
}
