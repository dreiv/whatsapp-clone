import { Component, OnInit } from '@angular/core';
import { CoordinatorService } from 'src/app/services/coordinator.service';

@Component({
  selector: 'app-info-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public coordinatorService: CoordinatorService) { }

  ngOnInit(): void {
  }

}
