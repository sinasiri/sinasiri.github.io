import {Component} from '@angular/core';
import {AnimationOptions} from "ngx-lottie";
import {LottiePlayerComponent} from "../lottie-player/lottie-player.component";


@Component({
    selector: 'app-projects',
    imports: [LottiePlayerComponent],
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
            technologies: 'Angular 21, HTML, SCSS, Material UI, Typescript, Javacript',
            techIcons: ['angular', 'typescript', 'html'],
            link: 'https://github.com/sinasiri/sinasiri.github.io',
        }
    ]
}
