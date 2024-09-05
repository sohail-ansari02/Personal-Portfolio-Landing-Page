import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxShineBorderComponent } from '@omnedia/ngx-shine-border';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { RangePipe } from './pipes/range.pipe';
import { SwapperButtonComponent } from './components/swapper-button/swapper-button.component';
import { SwapperDirective } from './directives/swapper.directive';

@NgModule({
    imports: [CommonModule, ProgressBarComponent,
        RangePipe,
        SwapperButtonComponent,
        SwapperDirective],
    exports: [
        ProgressBarComponent,
        RangePipe,
        SwapperButtonComponent,
        SwapperDirective,
    ],
})
export class SharedModule {}
