import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
    @Input() isNextBtnDisabled: boolean = false;
    @Input() isPreviousBtnDisabled: boolean = true;
    @Output() page: EventEmitter<string> = new EventEmitter<string>();

    changePage(value: string): void {
        this.page.emit(value);
    }
}
