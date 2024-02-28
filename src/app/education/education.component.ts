import {Component, OnInit} from '@angular/core';
import {AnimationOptions, LottieComponent} from "ngx-lottie";
import {AnimationItem} from "lottie-web";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [NgFor, LottieComponent],
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
