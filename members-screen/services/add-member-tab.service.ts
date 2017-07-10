import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AddMemberTab {
    private addMemberTab: Subject <any> = new Subject<any>();
    private formEmptyChecking: Subject <any> = new Subject<any>();
    createNewTab () {
        this.addMemberTab.next();
    }
    createTabEvent(): Observable<any> {
        return this.addMemberTab.asObservable();
    }
    checkFormValues() {
        this.formEmptyChecking.next();
    }
    formEvent(): Observable<any> {
        return this.formEmptyChecking.asObservable();
    }
}
