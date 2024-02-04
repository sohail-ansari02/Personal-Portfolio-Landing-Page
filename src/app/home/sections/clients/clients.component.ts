import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Client } from '../../interfaces/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
        name: 'John Smith',
        position: 'Chief Executive Officer',
        feedback:
          'I am truly impressed with their work. Lorem ipsum dolor sit amet consectetur. Nibh porttitor aliquet tellus eget egestas. Enim ultrices dictumst tortor in eget neque vestibulum potenti tempus',
        ratings: 4,
        profileImg: 'assets/images/clients/client (4).png',
      },
      {
        name: 'Emma Johnson',
        position: 'Lead Developer',
        feedback:
          'Exceptional service and attention to detail. Lorem ipsum dolor sit amet consectetur. Nibh porttitor aliquet tellus eget egestas. Enim ultrices dictumst tortor in eget neque vestibulum potenti tempus',
        ratings: 5,
        profileImg: 'assets/images/clients/client (3).png',
      },
      {
        name: 'Alex Rodriguez',
        position: 'Marketing Manager',
        feedback:
          'Consistently delivers outstanding results. Lorem ipsum dolor sit amet consectetur. Nibh porttitor aliquet tellus eget egestas. Enim ultrices dictumst tortor in eget neque vestibulum potenti tempus',
        ratings: 4,
        profileImg: 'assets/images/clients/client (1).png',
      },
      {
        name: 'John Williams',
        position: 'Project Manager',
        feedback:
          'Highly professional and creative team. Lorem ipsum dolor sit amet consectetur. Nibh porttitor aliquet tellus eget egestas. Enim ultrices dictumst tortor in eget neque vestibulum potenti tempus',
        ratings: 5,
        profileImg: 'assets/images/clients/client (2).png',
      },
    ];
  }
}
