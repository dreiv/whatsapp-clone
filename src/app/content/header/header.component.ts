import { Component, OnInit } from '@angular/core';
import { ChatsService } from 'src/app/services/chats/chats.service';
import { Chat } from 'src/app/services/chats/chat';
import { CoordinatorService } from 'src/app/services/coordinator.service';

@Component({
  selector: 'app-content-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activeChat: Chat;

  constructor(
    private chatsService: ChatsService,
    public coordinatorService: CoordinatorService
  ) { }

  ngOnInit(): void {
    this.activeChat = this.chatsService.getActiveChat();
  }

}
