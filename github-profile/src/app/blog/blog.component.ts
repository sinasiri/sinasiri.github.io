import {Component} from '@angular/core';
import {AnimationOptions, LottieComponent} from "ngx-lottie";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [LottieComponent, NgFor],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  options: AnimationOptions = {
    path: './assets/animations/blog.json',
  };


  blogs = [
    {
      date: '28 May, 2021',
      title: 'Getting Started with Competetive programming',
      imageUrl: './assets/images/blog/test.png',
      href: 'https://google.com'
    }
  ]
}
