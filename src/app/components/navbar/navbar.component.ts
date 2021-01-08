import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    brandName: string = 'Pokédex';
    searchButtonText: string = 'Search';
    inputPlaceholderText: string = 'Search';
}
