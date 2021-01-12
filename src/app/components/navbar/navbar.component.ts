import { Component } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
    brandName: string = 'Pokédex';
    buttonIcon: string = 'search';
    inputPlaceholderText: string = 'Search';
}
