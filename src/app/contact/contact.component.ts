import {Component} from '@angular/core';
import {AnimationOptions} from 'ngx-lottie';
import {SocialMediaComponent} from "../social-media/social-media.component";
import {CvComponent} from "../cv/cv.component";

import emailjs, {type EmailJSResponseStatus} from '@emailjs/browser';
import {LottiePlayerComponent} from "../lottie-player/lottie-player.component";

@Component({
    selector: 'app-contact',
    imports: [SocialMediaComponent, CvComponent, LottiePlayerComponent],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {

    options: AnimationOptions = {
        path: './assets/animations/email.json',
    };

    emailOptions: AnimationOptions = {
        path: './assets/animations/hired.json',
    };

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
