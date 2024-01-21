import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  openMenu: boolean = false;
  links: string[] = ['home', 'about me', 'services', 'projects', 'contact me'];
  constructor() {}

  ngOnInit(): void {}

  onToggle() {
    if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      return
    }
    this.openMenu = !this.openMenu;
    // @ts-ignore
    // document.body.inert = this.openMenu;
  }
}
