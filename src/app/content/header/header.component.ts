import { Component, OnInit } from '@angular/core';
import { ChatsService } from 'src/app/services/chats/chats.service';
import { Chat } from 'src/app/services/chats/chat';

@Component({
  selector: 'app-content-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activeChat: Chat;

  constructor(private chatsService: ChatsService) { }

  ngOnInit(): void {
    this.activeChat = this.chatsService.getActiveChat();
  }

}
