import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FieldQuickSearchComponent } from './field-quick-search.component';
import { FormsModule } from '@angular/forms';

describe('Component : FieldQuickSearchComponent', () => {
    let component: FieldQuickSearchComponent;
    let fixture: ComponentFixture<FieldQuickSearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [FieldQuickSearchComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FieldQuickSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('text should be cleared with a click on X icon', () => {
        component.value = 'clearing text with X';
        component.clearText();
        expect(component.value).toEqual('');
    });

    it('clearing X icon onblur ', () => {
        component.onBlur();
        fixture.detectChanges();
        component.value = '';
        expect(component.isActive).toEqual(false);
    });

    it('Fill the quick search component and click the X button to ensure text is empty', () => {
        const debugElement = fixture.debugElement;
        debugElement.query(By.css('.field-quick-search__input')).nativeElement.value = 'text for testing';
        debugElement.query(By.css('.field-quick-search__input')).nativeElement.focus();
        fixture.detectChanges();
        debugElement.query(By.css('.icon-delete')).nativeElement.click();
        expect(component.value).toEqual('');
    });

    it('show X icon onFocus ', () => {
        component.onFocus();
        fixture.detectChanges();
        expect(component.isActive).toEqual(true);
    });

    it('clearing text after hitting ctrl+space', () => {
        const event = {
            'ctrlKey': true,
            'code': 'Space'
        };
        component.value = 'ctrlspace testing';
        component.onChange(event);
        fixture.detectChanges();
        expect(component.value).toEqual('');
    });
});


