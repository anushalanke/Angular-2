import { Component } from '@angular/core';
import { FieldBaseComponent, NG_VALUE_ACCESSOR_PROVIDER } from '../../field-base.component';

@Component({
    selector: 'csn-field-quick-search',
    templateUrl: './field-quick-search.component.html',
    styleUrls: ['./field-quick-search.component.scss'],
    providers: [NG_VALUE_ACCESSOR_PROVIDER(FieldQuickSearchComponent)]
})
export class FieldQuickSearchComponent extends FieldBaseComponent {
    public isActive: boolean;
    public isFocused: boolean;

    constructor() {
        super();
        this.value = '';
        this.isActive = false;
    }

    public onChange(event): void {
        if (event.ctrlKey && event.code === 'Space') {
            this.value = '';
        }
    }

    clearText(): void {
        this.value = '';
        this.isActive = false;
    }

    onBlur(): void {
        this.isActive = (this.value !== '');
        this.isFocused = false;
    }

    onFocus(): void {
        this.isFocused = true;
        this.isActive = true;
    }
}
