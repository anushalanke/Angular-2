import { Component, Input, OnChanges } from '@angular/core';
import { FieldBaseComponent, NG_VALUE_ACCESSOR_PROVIDER } from '../../field-base.component';
import { OptionValue } from '../../../models/dropdown-option-value.interface';
import { isBlank } from '../../../forms-utils';
import { IDropdownOption } from '../../../models/dropdown-option.interface';

@Component({
    selector: 'csn-field-dropdown',
    templateUrl: './field-dropdown.component.html',
    styleUrls: ['./field-dropdown.component.scss'],
    providers: [NG_VALUE_ACCESSOR_PROVIDER(FieldDropdownComponent)]
})
export class FieldDropdownComponent extends FieldBaseComponent implements OnChanges {

    @Input() options: OptionValue[];

    // This @Input is created to set which property from an OptionValue should be used as the dropdown value,
    // as the TruCare API is not consistent in this. Sometimes it accepts id, sometimes value, sometimes even label.
    // If you use string 'object' you get the whole OptionValue
    @Input() valueKey: string;
    preparedOptions: IDropdownOption[];

    constructor() {
        super();
        this.valueKey = 'id';
    }

    get focusElement(): any {
        return this.inputElement.selectionSpan.nativeElement;
    }

    ngOnChanges(changes: any): void {
        if (changes.options && changes.options.currentValue) {
            this.preparedOptions = [];
            this.changeOptionValuesToSelectItems();
        }
    }

    changeOptionValuesToSelectItems(): void {
        this.options.forEach((option: OptionValue) => {
            if ((option.disabled && !isBlank(this.value) && this.value === option.value) || !option.disabled) {
                this.preparedOptions.push({
                    value: this.valueKey === 'object' ? option : option[this.valueKey],
                    label: option.label
                });
            }
        });
    }

    checkSelectedItem(value) {
        this.writeValue(value);
    }

    clear(value) {
        this.writeValue(null);
    }
}
