import { Component, OnInit } from '@angular/core';
import { NgxShineBorderComponent } from '@omnedia/ngx-shine-border';

@Component({
    selector: 'app-service-card',
    templateUrl: './service-card.component.html',
    styleUrls: ['./service-card.component.scss'],
    standalone: true,
    imports: [NgxShineBorderComponent]
})
export class ServiceCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
