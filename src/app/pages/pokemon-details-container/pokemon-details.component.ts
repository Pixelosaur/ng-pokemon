import { Component, OnInit } from '@angular/core';
import { PokemonDetail } from '../../interfaces/pokemon-detail.interface';

@Component({
    selector: 'app-pokemon-details',
    templateUrl: './pokemon-details.component.html',
    styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
    pokemon: PokemonDetail | undefined;

    constructor() {}

    ngOnInit(): void {
        this.pokemon = history.state;
    }
}
