import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoordinatorService {
  infoToggledChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isInfoToggled = false;
  messageToggledChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isMessageToggled = false;

  toggleInfo(toggleState = !this.isInfoToggled): void {
    this.isInfoToggled = toggleState;
    this.infoToggledChanged.next(this.isInfoToggled);
  }

  toggleMessage(toggleState = !this.isMessageToggled): void {
    this.isMessageToggled = toggleState;
    this.messageToggledChanged.next(this.isMessageToggled);
  }
}
