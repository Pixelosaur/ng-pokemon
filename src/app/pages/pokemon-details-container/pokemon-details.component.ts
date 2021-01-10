import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-pokemon-details',
    templateUrl: './pokemon-details.component.html',
    styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
    name: string = '';

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.name = this.activatedRoute.snapshot.paramMap.get('pokemon');
    }
}
