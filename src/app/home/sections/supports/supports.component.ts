import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supports',
  templateUrl: './supports.component.html',
  styleUrls: ['./supports.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupportsComponent implements OnInit {
  techList = [
    'Angular.png',
    'ReactJs.svg',
    'SCSS.svg',
    'TypeScript.svg',
    'JavaScript.svg',
    'ThreeJs.svg',
    'HTML.svg',
    'CSS.svg',
    'tailwind CSS.svg',
    'BootStrap.svg',
    'Angular Material.svg',
    'i18n.svg',
    'Universal.svg',
    'FabricJs.svg',
    'PWA.svg',
    'Git.svg',
  ];
  firstRow = [
    'Angular.png',
    'ReactJs.svg',
    'SCSS.svg',
    'TypeScript.svg',
    'JavaScript.svg',
    'ThreeJs.svg',
    'HTML.svg',
    'CSS.svg',
    'tailwind CSS.svg',
  ];
  secondRow = [
    'BootStrap.svg',
    'Angular Material.svg',
    'i18n.svg',
    'Universal.svg',
    'FabricJs.svg',
    'PWA.svg',
    'Git.svg',
  ];
  constructor() {}

  ngOnInit(): void {}
}
