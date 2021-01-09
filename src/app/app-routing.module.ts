// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { PokemonsComponent } from './pages/pokemons-container/pokemons.component';
import { PokemonDetailsComponent } from './pages/pokemon-details-view/pokemon-details.component';

const routes: Routes = [
    { path: '', redirectTo: 'pokedex', pathMatch: 'full' },
    {
        path: 'pokedex',
        component: PokemonsComponent,
    },
    {
        path: 'pokedex/:pokemon',
        component: PokemonDetailsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
