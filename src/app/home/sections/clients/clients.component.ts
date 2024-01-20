import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Client } from '../../interfaces/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsComponent implements OnInit {
  clients!: Client[];
  constructor() {}

  ngOnInit(): void {
    this.initData();
    this.clients.push(...this.clients);
  }
  initData(): void {
    this.clients = [
      {
        name: 'Savannah Nguyen',
        position: 'President of Sales',
        feedback:
          'Lorem ipsum dolor sit amet consectetur. Nibh porttitor aliquet tellus eget egestas. Enim ultrices dictumst tortor in eget neque vestibulum potenti tempus',
        ratings: 5,
        profileImg: 'assets/images/clients/client (4).png',
      },
      {
        name: 'Jenny Wilson',
        position: 'Medical Assistant',
        feedback:
          'Lorem ipsum dolor sit amet consectetur. Nibh porttitor aliquet tellus eget egestas. Enim ultrices dictumst tortor in eget neque vestibulum potenti tempus',
        ratings: 5,
        profileImg: 'assets/images/clients/client (3).png',
      },
      {
        name: 'Esther Howard',
        position: 'Nursing Assistant',
        feedback:
          'Lorem ipsum dolor sit amet consectetur. Nibh porttitor aliquet tellus eget egestas. Enim ultrices dictumst tortor in eget neque vestibulum potenti tempus',
        ratings: 5,
        profileImg: 'assets/images/clients/client (1).png',
      },
      {
        name: 'Cameron Williamson',
        position: 'Marketing Coordinator',
        feedback:
          'Lorem ipsum dolor sit amet consectetur. Nibh porttitor aliquet tellus eget egestas. Enim ultrices dictumst tortor in eget neque vestibulum potenti tempus',
        ratings: 5,
        profileImg: 'assets/images/clients/client (2).png',
      },
    ];
  }
}
