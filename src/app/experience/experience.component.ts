import {
    Component,
    OnInit,
} from '@angular/core';

import {
    NgStyle
} from '@angular/common';

import {LottiePlayerComponent} from "../lottie-player/lottie-player.component";

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [
        NgStyle,
        LottiePlayerComponent
    ],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {


    ngOnInit(): void {
    }

    experienceJson: any = {
        path: '/assets/animations/experience.json',
    };

    experiences: any[] = [
        {
            left: {
                company: 'Data Virtuality GMBH',
                date: 'September 2020 - till now',
                location: 'Germany (Remote)'
            },
            right: {
                role: 'Front-End Developer',
                description: 'Working as a Senior Angular Developer'
            }
        },
        {
            left: {
                company: 'ibpay.ir',
                date: 'February 2020 - October 2020',
                location: 'Iran'
            },
            right: {
                role: 'Front-End Developer',
                description: 'Worked as a Senior Angular Developer'
            }
        }
    ];
}