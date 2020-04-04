import { Component, OnInit } from '@angular/core';
import { ChatsService } from 'src/app/services/chats/chats.service';
import { Chat } from 'src/app/services/chats/chat';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {
  chats: Chat[]

  constructor(private chatsService: ChatsService) { }

  ngOnInit(): void {
    this.chats = this.chatsService.chats;
  }

}
