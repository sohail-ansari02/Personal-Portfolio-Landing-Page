import { Component, DestroyRef, OnInit, inject } from '@angular/core';

import { HomeService } from './home.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private hs = inject(HomeService);
  masterData:any;
  constructor() {
    this.hs.masterData
      .pipe(takeUntilDestroyed())
      .subscribe((val) => (this.masterData = val));
  }
}
