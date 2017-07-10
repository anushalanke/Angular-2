import { Component } from '@angular/core';
import { AddMemberTab } from './services/add-member-tab.service';
import { Router } from '@angular/router';

@Component({
    selector: 'csn-members-screen',
    templateUrl: './members-screen.component.html',
    styleUrls: ['./members-screen.component.scss']
})
export class MembersScreenComponent {
    membersScreenSwitchTabs: any[];
    membersScreenHeading: string;
    plusIcon = false;
    constructor(public event: AddMemberTab, private router: Router) {
        this.membersScreenHeading = 'Members';
        this.membersScreenSwitchTabs = [
            {link: ['/client/members'], label: 'My List'},
            {link: ['/client/members/search'], label: 'Database Search'}
        ];
        if (this.router.url.indexOf('search') !== -1) {
            this.plusIcon = true;
        }
    }
    showPlusIcon(label) {
        if (label === 'Database Search') {
            this.plusIcon = true;
        } else {
            this.plusIcon = false;
        }
    }
}
