import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { MembersScreenComponent } from './members-screen.component';
import { DebugElement } from '@angular/core';

describe('MembersScreenComponent', () => {
    let component: MembersScreenComponent;
    let fixture: ComponentFixture<MembersScreenComponent>;
    let debugTabSwitchElement: DebugElement[];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterModule, RouterTestingModule],
            declarations: [
                MembersScreenComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MembersScreenComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Members Screen component should create', () => {
        expect(component).toBeTruthy();
    });

    /**
     * Should make sure the members screen is rendered right
     * @Step1: Check for header render
     * @Step2: Check for Members Screen tab switch
     */
    it('should check for the right rendering of the member screen header', () => {
        const memberScreenHeader = fixture.debugElement.query(By.css('h2')).nativeElement;
        const membersSearchTabSwitch = fixture.debugElement.query(By.css('.members-screen__switch-tab')).nativeElement;

        expect(memberScreenHeader.innerText).toBe('MEMBERS');
        expect(membersSearchTabSwitch).toBeTruthy();
    });

    it('Check the length of member screen tab switch elements rendered', () => {
        const memberScreenTabSwitchLength = fixture.debugElement.queryAll(By.css('.members-screen__switch-tab-list')).length;
        expect(memberScreenTabSwitchLength).toEqual(2);
    });

    it('Check the member screen label name and router link address rendered correctly or not', () => {
        const memberScreenSwitchTabItems = component.membersScreenSwitchTabs;
        debugTabSwitchElement = fixture.debugElement.queryAll(By.css('.members-screen__switch-tab-list'));
        for (let i = 0; i < debugTabSwitchElement.length; i++) {
            /*Below line will check the label name rendered correctly or not*/
            expect(debugTabSwitchElement[i].nativeElement.innerHTML).toEqual(memberScreenSwitchTabItems[i].label);

            /*Below line will check the router line rendered properly in DOM or not*/
            expect(debugTabSwitchElement[i].nativeElement.getAttribute('ng-reflect-router-link')).toEqual(memberScreenSwitchTabItems[i].link.toString());
        }
    });

});
