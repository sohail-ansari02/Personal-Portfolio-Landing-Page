import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { CarousalButtonsComponent } from './components/carousal-buttons/carousal-buttons.component';



@NgModule({
  declarations: [
    ProgressBarComponent,
    CarousalButtonsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProgressBarComponent,
    CarousalButtonsComponent
  ]
})
export class SharedModule { }
