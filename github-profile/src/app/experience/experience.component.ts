import {Component, OnInit} from '@angular/core';
import {AnimationItem} from 'lottie-web';
import {LottieComponent, AnimationOptions} from 'ngx-lottie';
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor, LottieComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {

  experienceJson: AnimationOptions = {
    path: './assets/animations/experience.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  ngOnInit(): void {
  }

}
