import { Injectable } from '@angular/core';
import { Message } from './messages.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

// tslint:disable-next-line: variable-name
  private _messages: Message[] = [
    new Message(
      't2',
      'Local Message',
      '6/12/19:1.56'
    )
  ];

get messages() {
  return [...this._messages];
}
getMessage() {
  this.http.get(
    'https://peer-assist.firebaseio.com/messages/n1.json',
  )
  .subscribe((response) => {
// tslint:disable-next-line: forin
    for (const j in response) {
      const newMessage = new Message(
        j,
        response[j].text,
        response[j].timestamp,
      );
      this._messages.push(newMessage);
      }
  });
  return this._messages;
  }
get notifications() {
return [...this._messages];
}
constructor(private http: HttpClient) { }
}
