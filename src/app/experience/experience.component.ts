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

  experiences = [
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
        description: 'Working as a Senior Angular Developer'
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
        description: 'Working as a Senior Angular Developer'
      }
    }
  ];


  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  ngOnInit(): void {
  }

}
