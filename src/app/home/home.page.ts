import { Component, OnInit } from '@angular/core';
import { Notification } from './home.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loadedNotifications: Notification[];
  constructor(private homeService: HomeService) {}
  ngOnInit() {
    this.homeService.getPlace(); //calls get service in home.service
    this.loadedNotifications = this.homeService.notifications;
  }
}
