import { Component, HostBinding, OnInit, OnDestroy } from '@angular/core';
import { CoordinatorService } from './services/coordinator.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  @HostBinding('class.main-grid') isMain = true;
  @HostBinding('class.is-main-info-open') isInfoOpen;
  @HostBinding('class.is-message-open') isMessageOpen;

  private infoToggledSub: Subscription;
  private messageToggledSub: Subscription;

  constructor(private coordinatorService: CoordinatorService) {}

  ngOnInit(): void {
    this.infoToggledSub = this.coordinatorService.infoToggledChanged.subscribe(
      isInfoOpen => {
        this.isInfoOpen = isInfoOpen;
      }
    );
    this.messageToggledSub = this.coordinatorService.messageToggledChanged.subscribe(
      isMessageOpen => {
        this.isMessageOpen = isMessageOpen;
      }
    );
  }

  ngOnDestroy(): void {
    this.infoToggledSub.unsubscribe();
    this.messageToggledSub.unsubscribe();
  }
}
