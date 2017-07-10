import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CsnTabsComponent } from './csn-tabs.component';
import { MdTabsModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { CsnTabComponent } from './components/csn-tab/csn-tab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CsnTabsMockComponent } from './components/csn-tabs-mock/csn-tabs-mock.component';

describe('Component : CsnTabsComponent', () => {
    let component: CsnTabsComponent;
    let fixture: ComponentFixture<CsnTabsComponent>;
    let componentTab: CsnTabComponent;
    let fixtureTab: ComponentFixture<CsnTabComponent>;
    let testingTab: ComponentFixture<CsnTabsMockComponent>;
    let fixtureTesting: CsnTabsMockComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MdTabsModule, BrowserAnimationsModule],
            declarations: [CsnTabsComponent, CsnTabComponent, CsnTabsMockComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CsnTabsComponent);
        component = fixture.componentInstance;
        testingTab = TestBed.createComponent(CsnTabsMockComponent);
        fixtureTab = TestBed.createComponent(CsnTabComponent);
        componentTab = fixtureTab.componentInstance;
        fixtureTesting = testingTab.componentInstance;
    });

    it('Tab should be cleared with a click on X icon', () => {
        testingTab.detectChanges();
        const debugElement = testingTab.debugElement;
        const tabElementLength = debugElement.queryAll(By.css('.mat-tab-label')).length;
        const nativeElements = debugElement.queryAll(By.css('.icon-tabclose')).map((element) => element.nativeElement);
        nativeElements[2].click();
        testingTab.detectChanges();
        expect(debugElement.queryAll(By.css('.mat-tab-label')).length).toEqual(tabElementLength - 1);
    });

    it('First tab should be activated on Load', () => {
        testingTab.detectChanges();
        expect(fixtureTesting.tabsComponent.selectedIndex).toEqual(0);
    });

    it('Tab should be cleared with a click on X icon and not focusing', () => {
        testingTab.detectChanges();
        const debugElement = testingTab.debugElement;
        const nativeElements = debugElement.queryAll(By.css('.icon-tabclose')).map((element) => element.nativeElement);
        nativeElements[2].click();
        testingTab.detectChanges();
        expect(fixtureTesting.tabsComponent.selectedIndex).toEqual(0);
    });
});
