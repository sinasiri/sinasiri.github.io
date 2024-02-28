import {Component} from '@angular/core';
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [NgFor],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {
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
