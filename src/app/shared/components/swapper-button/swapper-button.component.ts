import { Component, Input, OnInit } from '@angular/core';
import { SwapperDirective } from '../../directives/swapper.directive';

@Component({
  selector: 'app-swapper-button',
  templateUrl: './swapper-button.component.html',
  styleUrls: ['./swapper-button.component.scss']
})
export class SwapperButtonComponent implements OnInit {
  @Input() swapper!: SwapperDirective;
  constructor() { }

  ngOnInit(): void {
  }

}
