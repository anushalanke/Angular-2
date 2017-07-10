import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
    selector: 'csn-tab',
    templateUrl: './csn-tab.component.html',
    styleUrls: ['./csn-tab.component.scss'],
})
export class CsnTabComponent {
    @Input() tabTitle: string;
    @Input() tabState: any;

    @ContentChild('tab') template: TemplateRef<Object>;

    constructor() {}
}
