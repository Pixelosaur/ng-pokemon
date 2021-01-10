import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { PokemonDetail } from '../../interfaces/pokemon-detail.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements AfterViewInit {
    @Input() pokemon: PokemonDetail;
    // used to add dynamic blob shapes
    @ViewChild('card') card: ElementRef;

    ngAfterViewInit() {
        console.log(this.card);
        this.card.nativeElement.style.borderRadius = '70% 30% 32% 68% / 28% 27% 73% 72%';
    }
}
