// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrandComponent } from './components/brand/brand.component';
import { InlineSearchFormComponent } from './components/forms/inline-search-form/inline-search-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PokemonsComponent } from './pages/pokemons-container/pokemons.component';
import { PokemonDetailsComponent } from './pages/pokemon-details-view/pokemon-details.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavbarComponent,
        BrandComponent,
        InlineSearchFormComponent,
        FooterComponent,
        PokemonsComponent,
        PokemonDetailsComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
