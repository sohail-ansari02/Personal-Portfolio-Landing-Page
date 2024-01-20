import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  links: string[] = [
    'home',
    'about me',
    'services',
    'projects',
    'contact me',
  ];
  constructor() {}

  ngOnInit(): void {}
}
