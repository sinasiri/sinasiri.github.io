import {Component} from '@angular/core';
import {LottieComponent, AnimationOptions} from 'ngx-lottie';
import {AnimationItem} from 'lottie-web';
import {SocialMediaComponent} from "../social-media/social-media.component";
import {CvComponent} from "../cv/cv.component";
import {CommonModule} from "@angular/common";
import emailjs, {type EmailJSResponseStatus} from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LottieComponent, SocialMediaComponent, CvComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {


  constructor() {
  }

  options: AnimationOptions = {
    path: './assets/animations/email.json',
  };

  emailOptions: AnimationOptions = {
    path: './assets/animations/hired.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .sendForm('service_pny4p72', 'template_942o93h', e.target as HTMLFormElement, {
        publicKey: 'wNSvEvW-xyTosfCwz',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
