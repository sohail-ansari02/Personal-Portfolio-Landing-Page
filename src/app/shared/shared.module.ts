import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { RangePipe } from './pipes/range.pipe';
import { SwapperButtonComponent } from './components/swapper-button/swapper-button.component';



@NgModule({
  declarations: [
    ProgressBarComponent,
    RangePipe,
    SwapperButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProgressBarComponent,
    RangePipe,
    SwapperButtonComponent
  ]
})
export class SharedModule { }
