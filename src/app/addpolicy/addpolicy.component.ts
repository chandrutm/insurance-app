import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserContact  } from '../_services/usercontact.model';
import { UsercontactService } from '../_services/policydetail.service';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService } from '../_services';
import { environment } from '../_enviroment';

@Component({
    templateUrl: 'addpolicy.component.html',
    styleUrls: ['addpolicy.component.css']
})

export class AddPolicyComponent implements OnInit {
    users: User[] = [];

    constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private userAddService: UsercontactService) {}
    
    addForm: FormGroup;
      @Output()
      createUsercontact = new EventEmitter<UserContact>();

  ngOnInit() {
        this.userService.getAll().pipe(first()).subscribe(users => { 
            this.users = users; 
        });

        this.addForm = this.formBuilder.group({
          policynum: [Validators.required,],
          premium: [Validators.required,],
          paymentfrequency: ['', Validators.required],
          nextpaymentdate: ['', Validators.required]
        });
    }

    isInvalid(name: string) {
        const control = this.addForm.get(name);
        return control.invalid && control.dirty;
      }
    
    onSubmit() {
        this.userAddService.create(this.addForm.value);

        this.router.navigate(['']);
      }

}