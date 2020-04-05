import { Component, OnInit } from '@angular/core';
import { ChatsService } from 'src/app/services/chats/chats.service';
import { Chat } from 'src/app/services/chats/chat';

@Component({
  selector: 'app-info-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  activeChat: Chat;

  constructor(private chatsService: ChatsService) { }

  ngOnInit(): void {
    this.activeChat = this.chatsService.getActiveChat();
  }

}
