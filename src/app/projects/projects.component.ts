import {Component} from '@angular/core';
import {AnimationOptions, LottieComponent} from "ngx-lottie";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [LottieComponent, NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  options: AnimationOptions = {
    path: './assets/animations/projects.json',
  };

  projects = [
    {
      title: 'sinasiri.github.io',
      description: 'Created and designed a portfolio project based on Angular latest version.',
      technologies: 'Angular 17, HTML, SCSS, Material UI, Typescript, Javacript',
      techIcons: ['angular', 'typescript', 'html'],
      link: 'https://github.com/sinasiri/sinasiri.github.io',
    }
  ]
}
