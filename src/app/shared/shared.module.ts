import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { RangePipe } from './pipes/range.pipe';
import { SwapperButtonComponent } from './components/swapper-button/swapper-button.component';
import { SwapperDirective } from './directives/swapper.directive';

@NgModule({
  declarations: [
    ProgressBarComponent,
    RangePipe,
    SwapperButtonComponent,
    SwapperDirective,
  ],
  imports: [CommonModule],
  exports: [
    ProgressBarComponent,
    RangePipe,
    SwapperButtonComponent,
    SwapperDirective,
  ],
})
export class SharedModule {}
