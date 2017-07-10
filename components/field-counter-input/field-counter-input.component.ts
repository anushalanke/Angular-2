import { Component, Input } from '@angular/core';
import { FieldBaseComponent, NG_VALUE_ACCESSOR_PROVIDER } from '../../field-base.component';

@Component({
    selector: 'csn-field-counter-input',
    templateUrl: './field-counter-input.component.html',
    styleUrls: ['./field-counter-input.component.scss'],
    providers: [NG_VALUE_ACCESSOR_PROVIDER(FieldCounterInputComponent)]
})
export class FieldCounterInputComponent extends FieldBaseComponent {

    @Input() minimum: number;
    @Input() maximum: number;

    showClearIcon: boolean;

    constructor() {
        super();
        this.showClearIcon = false;
        if (this.value !== undefined) {
            this.writeValue(this.value);
        }
    }

    get focusElement(): any {
        return this.inputElement.nativeElement;
    }

    decrementCounter() {
        if (!this.disabled) {
            if (this.value === null || this.value === undefined) {
                this.value = 0;
            } else if (this.value !== null) {
                if (this.minimum !== undefined && this.minimum !== null) {
                    if (this.value > this.minimum) {
                        this.value--;
                    }
                } else {
                    this.value--;
                }
            }
            this.writeValue(this.value);
        } else {
            return false;
        }
    }

    incrementCounter() {
        if (!this.disabled) {
            if (this.value === null || this.value === undefined) {
                this.value = 0;
            } else if (this.value !== null) {
                if (this.maximum !== undefined && this.maximum !== null) {
                    if (this.value < this.maximum) {
                        this.value++;
                    }
                } else {
                    this.value++;
                }
            }
            this.writeValue(this.value);
        } else {
            return false;
        }
    }

    onBlur() {
        setTimeout(() => {
            this.showClearIcon = false;
        }, 300);
    }

    onFocus() {
        this.showClearIcon = true;
    }

    onChanged(newValue) {
        this.writeValue(newValue);
        if (newValue !== null) {
            setTimeout(() => {
                this.writeValue(newValue.replace(/[^0-9]/g, ''));
            }, );
        }
    }
}
