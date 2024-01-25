import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import Toastify from 'toastify-js'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit, AfterViewInit {
  @ViewChild('form') form!: ElementRef;
  url: string = environment.ContactFormUrl;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.form.nativeElement)
  }
  showSuccessToast(): void{
    Toastify({
      text: "Sumitted successfully!🚀",
      duration: 2500,
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "white",
        color: '#0069e6',
      },
      onClick: function(){} // Callback after click
    }).showToast();
  }
  onSubmit(evt: Event): void{
    console.log('asd')
    // @ts-ignore
    window.Pageclip.form(this.form.nativeElement, {
      onSubmit:  () => {
        console.log('submitted')

      },
      onResponse:  () => {
        console.log('repsonsed!')
        this.showSuccessToast()
       },
       successTemplate: ''
    })
  }
}
