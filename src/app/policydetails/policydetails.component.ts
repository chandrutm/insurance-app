import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';
import { environment } from '../_enviroment';

@Component({
    templateUrl: 'policydetails.component.html',
    styleUrls: ['policydetails.component.css']
})

export class PolicyDetailsComponent implements OnInit {
    users: User[] = [];

    constructor(private userService: UserService) {}
    

  ngOnInit() {
        this.userService.getAll().pipe(first()).subscribe(users => { 
            this.users = users; 
        });
    }

}