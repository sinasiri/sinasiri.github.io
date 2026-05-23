import {Component, OnInit} from '@angular/core';
import {AnimationOptions} from "ngx-lottie";
import {AnimationItem} from "lottie-web";
import {LottiePlayerComponent} from "../lottie-player/lottie-player.component";

@Component({
    selector: 'app-education',
    imports: [LottiePlayerComponent],
    templateUrl: './education.component.html',
    styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit {

    educationJson: AnimationOptions = {
        path: './assets/animations/education.json',
    };

    animationCreated(animationItem: AnimationItem): void {
        console.log(animationItem);
    }

    ngOnInit(): void {
    }

}
