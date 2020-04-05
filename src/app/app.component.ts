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

  private coordinatorSub: Subscription;

  constructor(private coordinatorService: CoordinatorService) { }

  ngOnInit(): void {
    this.coordinatorSub = this.coordinatorService.isInfoChanged.subscribe(isInfoOpen => { this.isInfoOpen = isInfoOpen });
  }

  ngOnDestroy(): void {
    this.coordinatorSub.unsubscribe();
  }
}
