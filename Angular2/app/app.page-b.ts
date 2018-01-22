import { Component } from '@angular/core';
import { ActivatedRoute, Params }       from '@angular/router';

@Component({
    template: `ID: {{id}}<br/>
               Name: {{firstName}}`
})
export class PageBComponent {
    private id;
    private firstName;

    constructor(
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let localID    = params['id'];
            let localName  = params['firstname'];
            this.id        = localID;
            this.firstName = localName;
        });
    }
}
