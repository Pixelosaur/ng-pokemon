import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class PokemonsService {
    constructor(private http: HttpClient) {}

    getPokemonList(url: string | null = null): Observable<any> {
        const limit: string = '20';
        const offset: string = '0';

        const apiUrl: string = url
            ? url
            : `${environment.serverUrl}/pokemon?limit=${limit}&offset=${offset}`;

        return this.http.get<any>(apiUrl).pipe(
            mergeMap((response: any) =>
                forkJoin(
                    ...response.results.map((res: any) => this.getPokemonDetails(res.url)),
                ).pipe(
                    map((details) => {
                        return {
                            ...response,
                            details,
                        };
                    }),
                ),
            ),
        );
    }

    getPokemonDetails(url: string): Observable<any> {
        return this.http.get<any>(`${url}`).pipe(map((response: any) => response));
    }
}
