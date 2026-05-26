import { Component } from '@angular/core';

@Component({
    selector: 'app-social-media',
    imports: [],
    templateUrl: './social-media.component.html',
    styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {
    socials = [
        {
            name: 'X',
            link: 'https://twitter.com/sinasiri_',
            imageUrl: './assets/images/x.png'
        },
        {
            name: 'GitHub',
            link: 'https://github.com/sinasiri',
            imageUrl: './assets/images/github.png'
        },
        {
            name: 'Telegram',
            link: 'https://t.me/dsinad',
            imageUrl: './assets/images/telegram.png'
        },
        {
            name: 'Email',
            link: 'mailto:sinasiri1997@gmail.com',
            imageUrl: './assets/images/gmail.png'
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/sina-nasiri-7a0595110/',
            imageUrl: './assets/images/linkedin.png'
        },
        // {
        //     name: 'Blogger',
        //     link: 'https://sinasiri.blogspot.com',
        //     imageUrl: './assets/images/blogger.png'
        // },
        {
            name: 'Medium',
            link: 'https://medium.com/@sinasiri',
            imageUrl: './assets/images/medium.png'
        }
    ];
}