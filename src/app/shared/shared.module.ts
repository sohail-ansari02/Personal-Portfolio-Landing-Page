import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { CarousalButtonsComponent } from './components/carousal-buttons/carousal-buttons.component';
import { RangePipe } from './pipes/range.pipe';



@NgModule({
  declarations: [
    ProgressBarComponent,
    CarousalButtonsComponent,
    RangePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProgressBarComponent,
    CarousalButtonsComponent,
    RangePipe
  ]
})
export class SharedModule { }
