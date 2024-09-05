import { StickyNavbarDirective } from './layout/directives/sticky-navbar.directive';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        HeaderComponent,
        FooterComponent,
        LayoutComponent,
        StickyNavbarDirective
    ],
    exports: [
        LayoutComponent,
    ]
})
export class CoreModule { }
