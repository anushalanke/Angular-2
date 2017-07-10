import { Component, ViewChild } from '@angular/core';
import { CsnTabsComponent } from '../../../csn-tabs/csn-tabs.component';

@Component({
    selector: 'csn-tabs-mock',
    templateUrl: './csn-tabs-mock.component.html',
})
export class CsnTabsMockComponent {
    @ViewChild(CsnTabsComponent) tabsComponent: CsnTabsComponent;

    constructor() {}
}
