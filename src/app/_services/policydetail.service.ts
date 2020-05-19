import { Injectable } from '@angular/core';
import { UserContact } from './usercontact.model';

@Injectable({
    providedIn: 'root'
})

export class UsercontactService {
    usercontacts: UserContact[] = [{
        id: 123456789011,
        premium: 1000,
        paymentfrequency: 'Half Yearly',
        nextpaymentdate: '10/06/2020'
      },
      {
        id: 23456789012,
        premium: 1500,
        paymentfrequency: 'Yearly',
        nextpaymentdate: '10/10/2020'
      },
      {
        id: 34567890123,
        premium: 750,
        paymentfrequency: 'Quaterly',
        nextpaymentdate: '05/07/2020'
      },
      {
        id: 45678901245,
        premium: 500,
        paymentfrequency: 'Half Yearly',
        nextpaymentdate: '12/12/2020'
      }];

      create(usercontact: UserContact) {
        const itemIndex = this.usercontacts.length;
        usercontact.id = this.getnextId();
        console.log(usercontact);
        this.usercontacts[itemIndex] = usercontact;
      }

      getall(): UserContact[] {
        console.log('usercontactservice:getall');
        console.log(this.usercontacts);
        return this.usercontacts;
      }

      getnextId(): number {
        let highest = 0;
        this.usercontacts.forEach(function (item) {
          if (highest === 0) {
            highest = item.id;
          }
          if (highest < item.id) {
            highest = item.id;
          }
        });
        return highest + 1;
      }
}