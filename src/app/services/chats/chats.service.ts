import { Injectable } from '@angular/core';
import chats from './chats.json'
import { Chat } from './chat';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  public chats: Chat[];

  constructor() {
    this.chats = chats;
  }

  getActiveChat = (): Chat => ({ ...chats[0] })
}
