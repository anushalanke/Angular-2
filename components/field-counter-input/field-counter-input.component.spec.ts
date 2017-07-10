import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FieldCounterInputComponent } from './field-counter-input.component';
import { FormsModule } from '@angular/forms';
import { FieldErrorComponent } from '../field-error/field-error.component';
import { FieldHintComponent } from '../field-hint/field-hint.component';
import { ObjectToArrayPipe } from '../../../pipes/object-to-array.pipe';
import { MdTooltipModule } from '@angular/material';

describe('Component : FieldCounterInputComponent', () => {
    let component: FieldCounterInputComponent;
    let fixture: ComponentFixture<FieldCounterInputComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule, MdTooltipModule],
            declarations: [FieldCounterInputComponent, FieldErrorComponent, FieldHintComponent, ObjectToArrayPipe]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FieldCounterInputComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Show X icon onFocus ', () => {
        component.onFocus();
        fixture.detectChanges();
        expect(component.showClearIcon).toEqual(true);
    });

    it('Clear X icon onblur ', () => {
        component.onBlur();
        fixture.detectChanges();
        expect(component.showClearIcon).toEqual(false);
    });

    it('Clear Counter Input component after hitting CTRL+SPACE button', () => {
        const event = {
            'ctrlKey': true,
            'code': 'Space'
        };
        component.value = 12;
        component.checkKeyEventForClear(event);
        fixture.detectChanges();
        expect(component.value).toEqual(null);
    });

    it('Counter Input value should be cleared on click on X icon', () => {
        component.value = 5;
        component.onChanged(null);
        expect(component.value).toEqual(null);
    });

    it('Counter Input value increased on click on Increment(Up Arrow) icon', () => {
        component.value = 5;
        component.incrementCounter();
        expect(component.value).toEqual(6);
    });

    it('Counter Input value decreased on click on Decrement(Down Arrow) icon', () => {
        component.value = 5;
        component.decrementCounter();
        expect(component.value).toEqual(4);
    });

    it('Counter Input value should not increased on click on Increment(Up Arrow) icon after the maximum value', () => {
        component.value = 10;
        component.maximum = 10;
        component.incrementCounter();
        expect(component.value).toEqual(10);
    });

    it('Counter Input value should not decreased on click on Decrement(Down Arrow) icon after the minimum value', () => {
        component.value = 0;
        component.minimum = 0;
        component.decrementCounter();
        expect(component.value).toEqual(0);
    });

    xit('Fill the counter input component value and click the X button to ensure counter input value is null/empty', () => {
        const debugElement = fixture.debugElement;
        const counterInputElement = debugElement.query(By.css('.field-counter-input__input')).nativeElement;
        counterInputElement.value = 5;
        counterInputElement.focus();
        fixture.detectChanges();
        debugElement.query(By.css('.icon-delete')).nativeElement.click();
        expect(component.value).toEqual(null);
    });

    it('Fill the counter input component value and click the CTRL+SPACE button to ensure counter input value is null', () => {
        const debugElement = fixture.debugElement;
        const counterInputElement = debugElement.query(By.css('.field-counter-input__input')).nativeElement;
        counterInputElement.value = 3;
        counterInputElement.focus();
        fixture.detectChanges();
        const ctrlSpaceEvent = new KeyboardEvent('keydown', {
            'code': 'Space',
            'ctrlKey': true
        });
        counterInputElement.dispatchEvent(ctrlSpaceEvent);
        expect(component.value).toEqual(null);
    });

});
