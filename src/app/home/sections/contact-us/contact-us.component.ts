import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { toast } from 'src/app/core/utils';
import { environment } from 'src/environments/environment';
import Toastify from 'toastify-js';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form!: ElementRef;
  url: string = environment.ContactFormUrl;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log(this.form.nativeElement);
  }

  onSubmit(evt: Event): void {
    // @ts-ignore
    window.Pageclip.form(this.form.nativeElement, {
      onSubmit: () => {
        console.log('submitted');
      },
      onResponse: () => {
      toast('Sumitted successfully!🚀');
      },
      successTemplate: '',
    });
  }
}
