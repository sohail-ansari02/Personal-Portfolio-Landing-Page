import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Tabs } from 'src/app/shared/interfaces/tabs';
import { InfoList } from '../../interfaces/info-list';
import { Project, ProjectType } from '../../interfaces/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit, Tabs<Project> {
  tabData: Project[] = [];
  selectedTab!: ProjectType;
  tabs: string[] = ['All', 'UI/UX Design', 'Branding Design', 'Wordpress'];
  ngOnInit(): void {
    this.initTabData();
    this.selectedTab = <ProjectType>this.tabs[1].toLowerCase();
  }
  initTabData(): void {
    this.tabData = [
      {
        name: 'AR/VR website',
        imgPath: '/assets/images/projects/project (1).webp',
        type: 'ui/ux design',
      },
      {
        name: '3D mockup website',
        imgPath: '/assets/images/projects/project (5).webp',
        type: 'ui/ux design',
      },
      {
        name: 'StreetTreat website',
        imgPath: '/assets/images/projects/project (6).webp',
        type: 'ui/ux design',
      },
      {
        name: 'StreetTreat website',
        imgPath: '/assets/images/projects/project (6).webp',
        type: 'branding design',
      },
      {
        name: 'Mobirito website',
        imgPath: '/assets/images/projects/project (3).webp',
        type: 'ui/ux design',
      },
      {
        name: 'EdenTravel website',
        imgPath: '/assets/images/projects/project (2).webp',
        type: 'wordpress',
      },
      {
        name: 'Mockup website',
        imgPath: '/assets/images/projects/project (4).webp',
        type: 'wordpress',
      },
      {
        name: 'StreetTreat website',
        imgPath: '/assets/images/projects/project (6).webp',
        type: 'wordpress',
      },
      {
        name: 'EdenTravel website',
        imgPath: '/assets/images/projects/project (2).webp',
        type: 'ui/ux design',
      },
      {
        name: 'Mobirito website',
        imgPath: '/assets/images/projects/project (3).webp',
        type: 'branding design',
      },
      {
        name: 'Mobirito website',
        imgPath: '/assets/images/projects/project (3).webp',
        type: 'wordpress',
      },
      {
        name: 'AR/VR website',
        imgPath: '/assets/images/projects/project (1).webp',
        type: 'wordpress',
      },
      {
        name: 'Mockup website',
        imgPath: '/assets/images/projects/project (4).webp',
        type: 'ui/ux design',
      },
      {
        name: '3D mockup website',
        imgPath: '/assets/images/projects/project (5).webp',
        type: 'wordpress',
      },
      {
        name: '3D mockup website',
        imgPath: '/assets/images/projects/project (5).webp',
        type: 'branding design',
      },
      {
        name: 'EdenTravel website',
        imgPath: '/assets/images/projects/project (2).webp',
        type: 'branding design',
      },
      {
        name: 'Mockup website',
        imgPath: '/assets/images/projects/project (4).webp',
        type: 'branding design',
      },
      {
        name: 'AR/VR website',
        imgPath: '/assets/images/projects/project (1).webp',
        type: 'branding design',
      },
    ];
  }
  onSelectTab(tabName: string): void {
    if (this.selectedTab === <ProjectType>tabName.toLowerCase()) return;

    this.selectedTab = <ProjectType>tabName.toLowerCase();
    console.log(this.selectedTab, ' is selected');
  }
  shuffleArray(array: any[]): any[] {
    const shuffledArray = array.slice(); // Create a copy of the original array

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Generate a random index within the array
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ]; // Swap elements at i and j
    }

    return shuffledArray;
  }
}
