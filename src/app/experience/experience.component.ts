import {
    Component,
    OnInit,
} from '@angular/core';

import {LottiePlayerComponent} from "../lottie-player/lottie-player.component";

@Component({
    selector: 'app-experience',
    standalone: true,
    imports: [
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
            }
            , right: {
                role: 'Front-End Developer',
                description: 'Working as a Senior Angular Developer'
            }
        },
        {
            left: {
                company: 'ibpay.ir',
                date: 'February 2020 - October 2020',
                location: 'Iran'
            }
            , right: {
                role: 'Front-End Developer',
                description: 'Worked as a Senior Angular Developer'
            }
        },
        {
            left: {
                company: 'Nicico (National Iranian Copper Industries)',
                date: 'February 2018 - February 2020',
                location: 'Iran'
            }
            , right: {
                role: 'Front-End Developer',
                description: 'Worked as a Senior Angular Developer'
            }
        },
        {
            left: {
                company: 'Maxsa',
                date: 'July 2018 - February 2019',
                location: 'Iran'
            }
            , right: {
                role: 'Front-End Developer',
                description: 'Worked as an Angular Developer'
            }
        },
        {
            left: {
                company: 'Fusoft',
                date: 'March 2016 - June 2018',
                location: 'Iran'
            }
            , right: {
                role: 'Full-Stack Web Developer',
                description: 'Worked as a Full-Stack .Net and Angular developer'
            }
        },
        {
            left: {
                company: 'Pasargad',
                date: '2016',
                location: 'Iran'
            }
            , right: {
                role: 'Mathematics Teacher',
                description: 'Mathematics and geometry teacher in high school'
            }
        }
    ];
}