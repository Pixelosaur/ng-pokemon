import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { PokemonDetail } from '../../interfaces/pokemon-detail.interface';
import { generateBlob } from '../../helpers/blob/blob.helper';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements AfterViewInit {
    @Input() pokemon: PokemonDetail;
    @ViewChild('card') card: ElementRef;

    ngAfterViewInit() {
        this.card.nativeElement.style.borderRadius = generateBlob();
    }
}
