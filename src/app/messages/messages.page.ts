import { Component, OnInit } from '@angular/core';
import { Message } from './messages.model';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  loadedMessages: Message[];
  constructor(private messageService: MessagesService) { }

  ngOnInit() {
      
    this.loadedMessages = this.messageService.getMessage();
    console.log(this.loadedMessages);
  }

}
