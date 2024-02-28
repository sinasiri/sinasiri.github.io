import {Component} from '@angular/core';
import {CommonModule, NgFor} from "@angular/common";
import {AnimationItem} from 'lottie-web';
import {LottieComponent, AnimationOptions} from 'ngx-lottie';
import {SocialMediaComponent} from "../social-media/social-media.component";
import {CvComponent} from "../cv/cv.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgFor, LottieComponent, SocialMediaComponent, CvComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  options: AnimationOptions = {
    path: './assets/animations/home.json',
  };

  backEndOptions: AnimationOptions = {
    path: './assets/animations/backend.json',
  };
  cloudOptions: AnimationOptions = {
    path: './assets/animations/cloud.json',
  };
  cryptoOptions: AnimationOptions = {
    path: './assets/animations/crypto.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  socials = [
    {link: 'https://twitter.com/sinasiri_', imageUrl: './assets/images/twitter.png'},
    {link: 'https://github.com/sinasiri', imageUrl: './assets/images/github.png'},
    {link: 'https://t.me/dsinad', imageUrl: './assets/images/telegram.png'},
    {link: 'mailto:sinasiri1997@gmail.com', imageUrl: './assets/images/gmail.png'},
    {link: 'https://www.linkedin.com/in/sina-nasiri-7a0595110/', imageUrl: './assets/images/linkedin.png'},
    {link: 'https://sinasiri.blogspot.com', imageUrl: './assets/images/blogger.png'},
    {link: 'https://sinasiri.hashnode.dev', imageUrl: './assets/images/hashnode.png'},
  ];
}
