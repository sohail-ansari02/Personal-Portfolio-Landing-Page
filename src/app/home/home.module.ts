import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { SharedModule } from '../shared/shared.module';
import { InfoTabComponent } from './components/info-tab/info-tab.component';
import { SupportsComponent } from './sections/supports/supports.component';
import { StatsComponent } from './sections/stats/stats.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { ProjectPipe } from './pipes/project.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    AboutMeComponent,
    InfoTabComponent,
    SupportsComponent,
    StatsComponent,
    ProjectsComponent,
    ProjectPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
