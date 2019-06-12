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
    this.loadedNotifications = this.homeService.getPlace(); // calls get service in home.service
    console.log(this.loadedNotifications);

  }
}
