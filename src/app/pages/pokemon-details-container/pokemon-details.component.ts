import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonDetail } from '../../interfaces/pokemon-detail.interface';

@Component({
    selector: 'app-pokemon-details',
    templateUrl: './pokemon-details.component.html',
    styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
    // name: string | null = '';
    pokemonDetail: PokemonDetail | null = null;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.pokemonDetail = history.state;
        // this.name = this.activatedRoute.snapshot.paramMap.get('pokemon');
    }
}
