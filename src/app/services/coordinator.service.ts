import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoordinatorService {
  isInfoChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isInfoToggled = false

  toggleInfo(toggleState): void {
    this.isInfoToggled = toggleState || !this.isInfoToggled;
    this.isInfoChanged.next(this.isInfoToggled)
    console.log('toggled')
  }
}
