import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
  input
} from '@angular/core';

import Toastify from 'toastify-js';
import { environment } from 'src/environments/environment';
import { toast } from 'src/app/core/utils';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form!: ElementRef;
  url: string = environment.ContactFormUrl;
  constructor() {}
  data = input<any>();

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // console.log(this.form.nativeElement);
  }

  onSubmit(evt: Event): void {
    // @ts-ignore
    window.Pageclip.form(this.form.nativeElement, {
      onSubmit: () => {
        // console.log('submitted');
      },
      onResponse: () => {
      toast('Sumitted successfully!🚀');
      },
      successTemplate: '',
    });
  }
}
