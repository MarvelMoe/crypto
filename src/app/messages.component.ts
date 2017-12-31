import { Component } from '@angular/core';

@Component({
  selector: 'messages',
  template: `
   <div *ngFor="let message of messages"> 
  <mat-card style="margin:10px"> <mat-card-title> {{message.owner}} </mat-card-title> 
  <mat-card-content> {{message.text}} </mat-card-content> 
  </mat-card>
  </div> 
   `,
  styles: ['.messages { color: #fff }'],
})
export class MessagesComponent {

messages = [{text: 'Pleaceholder content', owner: "Tim"}, {text: 'More Pleaceholder content', owner: "Joe"} ];

}