// Core
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Environments
import { environment } from '../../../environments/environment';
// RxJS
import { forkJoin, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
// Interfaces
import { PokemonList } from '../../interfaces/pokemon-list.interface';
import { PokemonDetail } from '../../interfaces/pokemon-detail.interface';
import { Pokemons } from '../../interfaces/pokemons.interface';
import { NamedApiResource } from '../../interfaces/named-api-resource.interface';

@Injectable({
    providedIn: 'root',
})
export class PokemonsService {
    constructor(private http: HttpClient) {}

    getPokemons(url: string | null = null): Observable<Pokemons> {
        const limit: string = '20';
        const offset: string = '0';

        const apiUrl: string = url
            ? url
            : `${environment.serverUrl}/pokemon?limit=${limit}&offset=${offset}`;

        return this.http.get<any>(apiUrl).pipe(
            mergeMap((response: PokemonList) =>
                forkJoin(
                    ...response.results.map((res: NamedApiResource) =>
                        this.getPokemonDetails(res.url),
                    ),
                ).pipe(
                    map((details: PokemonDetail[]) => {
                        console.log(details);
                        const pokemons: Pokemons = {
                            ...response,
                            details,
                        };

                        return pokemons;
                    }),
                ),
            ),
        );
    }

    getPokemonDetails(url: string): Observable<any> {
        return this.http.get<any>(`${url}`).pipe(map((response: any) => response));
    }
}
