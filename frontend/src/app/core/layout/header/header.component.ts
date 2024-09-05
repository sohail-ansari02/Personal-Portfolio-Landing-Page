import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { AnimationTransitionDelay, Breakpoints, isMobile } from '../../utils';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [
    NgClass
],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  openMenu: boolean = false;
  showMobileMenu: boolean = false;
  links: string[] = ['home', 'about me', 'services', 'projects', 'contact me'];
  constructor() {}
  ngAfterViewInit(): void {
    // if (isMobile()) {
    setTimeout(() => {
      this.showMobileMenu = true;
    }, AnimationTransitionDelay);
    // }
  }

  ngOnInit(): void {}

  onToggle() {
    if (!isMobile()) {
      return;
    }
    this.openMenu = !this.openMenu;
    // @ts-ignore
    // document.body.inert = this.openMenu;
  }
}
