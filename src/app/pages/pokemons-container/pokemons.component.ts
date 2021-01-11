// Core
import { Component, OnInit } from '@angular/core';
// Services
import { PokemonsService } from '../../services/pokemons/pokemons.service';
import { Pokemons } from '../../interfaces/pokemons.interface';
import { PokemonDetail } from '../../interfaces/pokemon-detail.interface';

@Component({
    selector: 'app-pokemons',
    templateUrl: './pokemons.component.html',
    styleUrls: ['./pokemons.component.scss'],
})
export class PokemonsComponent implements OnInit {
    pokemonDetails: PokemonDetail[] = [];

    nextRequestUrl: string | undefined;
    previousRequestUrl: string | undefined;

    isNextBtnDisabled: boolean = false;
    isPreviousBtnDisabled: boolean = true;

    isLoading: boolean = true;

    constructor(private pokemonsService: PokemonsService) {}

    ngOnInit(): void {
        this.getPokemonList();
    }

    getPokemonList(url?: string): void {
        this.pokemonsService.getPokemons(url).subscribe(
            (pokemons: Pokemons) => {
                this.pokemonDetails = pokemons.details;

                this.nextRequestUrl = pokemons.next || '';
                this.previousRequestUrl = pokemons.previous || '';

                this.isPreviousBtnDisabled = pokemons.previous === null;
                this.isNextBtnDisabled = pokemons.next === null;

                this.isLoading = !this.pokemonDetails;
            },
            (error: any) => {
                console.error(error);
            },
        );
    }

    onPageChange(page: string): void {
        // reset loader
        this.isLoading = true;

        if (page === 'next') {
            this.getPokemonList(this.nextRequestUrl);
        } else {
            this.getPokemonList(this.previousRequestUrl);
        }
    }
}
