import { Injectable } from '@angular/core';
import { Notification } from './home.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

      private _notifications: Notification[] = [
          new Notification(
              'n2',
              'Have you rated Jon Hand?',
              'Rate Jon for your appointment on April 20, 2019 at 6:00pm',
              './assets/imgs/gKittle.JPG'
              )
      ];
      getPlace() {
        this.http.get(
          'https://peer-assist.firebaseio.com/notifications.json',
        )
        .subscribe((response) => {
          for (var j in response) {
            const newNotification = new Notification(
              j,
              response[j].title,
              response[j].description,
              response[j].image
            )
            console.log(newNotification);

            }
        });
        }
get notifications() {
  console.log([...this._notifications]);
  // console.log([...this.newNotification]);
  return [...this._notifications];
}
constructor(private http: HttpClient) { }

// calls http get, with id passed from home.page.ts

}
// stopped here 6/7/19. just need to add notification just like addplace
