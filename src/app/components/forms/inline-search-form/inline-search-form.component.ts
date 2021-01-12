import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-inline-search-form',
    templateUrl: './inline-search-form.component.html',
})
export class InlineSearchFormComponent {
    @Input() searchButtonText: string | null = '';
    @Input() inputPlaceholderText: string | null = '';
    @Input() buttonIcon: string | null = '';
}
