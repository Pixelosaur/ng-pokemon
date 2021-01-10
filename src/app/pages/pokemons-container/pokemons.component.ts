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

    nextRequestUrl: string = '';
    previousRequestUrl: string = '';

    isNextBtnDisabled: boolean = false;
    isPreviousBtnDisabled: boolean = true;

    constructor(private pokemonsService: PokemonsService) {}

    ngOnInit(): void {
        this.getPokemonList();
    }

    getPokemonList(url?: string): void {
        this.pokemonsService.getPokemons(url).subscribe(
            (pokemons: Pokemons) => {
                this.pokemonDetails = pokemons.details;

                this.nextRequestUrl = pokemons.next;
                this.previousRequestUrl = pokemons.previous || '';

                this.isPreviousBtnDisabled = !this.previousRequestUrl;
            },
            (error: any) => {
                console.error(error);
            },
        );
    }

    onPageChange(page: string) {
        if (page === 'next') {
            this.getPokemonList(this.nextRequestUrl);
        } else {
            this.getPokemonList(this.previousRequestUrl);
        }
    }
}
