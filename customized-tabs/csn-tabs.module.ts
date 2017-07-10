import { NgModule } from '@angular/core';
import { MdTabsModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { CsnTabsComponent } from './csn-tabs.component';
import { CsnTabComponent } from './components/csn-tab/csn-tab.component';
import { CsnTabsMockComponent } from './components/csn-tabs-mock/csn-tabs-mock.component';

@NgModule({
    imports: [
        CommonModule,
        MdTabsModule
    ],
    exports: [
        CsnTabsComponent,
        CsnTabComponent,
        CsnTabsMockComponent
    ],
    declarations: [
        CsnTabsComponent,
        CsnTabComponent,
        CsnTabsMockComponent
    ],
    providers: []
})
export class CsnTabsModule {
}
