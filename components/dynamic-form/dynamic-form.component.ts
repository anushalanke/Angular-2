import { Component, OnDestroy, Input, Output, EventEmitter, QueryList, ViewChildren, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CsnFormsService } from '../../../services/forms.service';
import { BaseField } from '../../../models/base-field';
import { FieldStyle } from '../../../models/field-style.interface';
import { FormBase } from '../../form-base';
import { OnSubmitPayloadInterface } from '../../../models/on-submit-payload.interface';

@Component({
    selector: 'csn-dynamic-form',
    templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent extends FormBase implements OnDestroy, OnChanges {

    @Input() fields: BaseField[];
    @Input() fieldStyles: { [id: string]: FieldStyle } = {};
    @Input() validator: any;

    @Output() onSubmit: EventEmitter<OnSubmitPayloadInterface>;

    @ViewChildren('fieldComponent') fieldComponents: QueryList<any>;

    form: FormGroup;

    constructor(private csnFormsService: CsnFormsService) {
        super();
        this.onSubmit = new EventEmitter<OnSubmitPayloadInterface>();
    }

    getFieldComponents() {
        return this.fieldComponents.toArray();
    }

    ngOnChanges() {
        this.form = this.csnFormsService.convertFieldsToFormGroup(this.fields, this.validator);
    }

    ngOnDestroy() {
        this.onSubmit.unsubscribe();
    }

    submit(event): void {
        this.onSubmit.emit(event);
    }
}
