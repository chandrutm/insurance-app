import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';
import { UserContact  } from '../_services/usercontact.model';
import { UsercontactService } from '../_services/policydetail.service';
import { environment } from '../_enviroment';

@Component({
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']

})
export class HomeComponent implements OnInit {
    users: User[] = [];
    usercontacts: UserContact[]; // Array<string>
    usercont: UserContact;

    constructor(private userService: UserService, private ucs: UsercontactService) {}

    ngOnInit() {
        this.userService.getAll().pipe(first()).subscribe(users => { 
            this.users = users; 
        });

        console.log('usercontact:init');
        this.usercontacts = this.ucs.getall();
        console.log(this.usercontacts);
    }
}