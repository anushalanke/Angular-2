import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FieldDropdownComponent } from './field-dropdown.component';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'ng-select';
import { FieldErrorComponent } from '../field-error/field-error.component';
import { FieldHintComponent } from '../field-hint/field-hint.component';
import { ObjectToArrayPipe } from '../../../pipes/object-to-array.pipe';
import { MdTooltipModule } from '@angular/material';

describe('Component : FieldDropdownComponent', () => {
    let component: FieldDropdownComponent;
    let fixture: ComponentFixture<FieldDropdownComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, SelectModule, MdTooltipModule],
            declarations: [FieldDropdownComponent, FieldErrorComponent, FieldHintComponent, ObjectToArrayPipe]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FieldDropdownComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Select an option from dropdown and hit ctrl+space to clear the value', () => {
        const debugElement = fixture.debugElement;
        component.preparedOptions = [
            {value: '0', label: 'Aech'},
            {value: '1', label: 'Art3mis'},
            {value: '2', label: 'Daito'},
            {value: '3', label: 'Parzival'},
            {value: '4', label: 'Shoto'},
            {value: '5', label: 'Abcd'}
        ];
        component.value = ['2'];
        debugElement.query(By.css('.field-dropdown__select')).nativeElement.focus();
        fixture.detectChanges();
        const ctrlSpaceEvent = new KeyboardEvent('keydown', {
            'code': 'Space',
            'ctrlKey': true
        });

        const selectElement = debugElement.query(By.css('.field-dropdown__select')).nativeElement;
        selectElement.dispatchEvent(ctrlSpaceEvent);
        expect(component.value).toEqual(null);
    });

});
