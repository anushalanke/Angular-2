import { Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { CsnTabComponent } from './components/csn-tab/csn-tab.component';

@Component({
    selector: 'csn-tabs',
    templateUrl: './csn-tabs.component.html',
    styleUrls: ['./csn-tabs.component.scss'],
})
export class CsnTabsComponent {

    @Input() selectedIndex: number;
    @Output() onClose: EventEmitter<any>;

    @ContentChildren(CsnTabComponent) tabs: QueryList<CsnTabComponent>;

    constructor() {
        this.selectedIndex = 0;
        this.onClose = new EventEmitter();
    }

    closeTab(index: number): void {
        const tabsArray = this.tabs.toArray();
        const closedTabArray = tabsArray.splice(index, 1);
        this.tabs.reset(tabsArray);
        if (this.selectedIndex === index) {
            this.selectedIndex = index - 1;
        }
        this.onClose.emit(closedTabArray[0].tabState);
    }
}

