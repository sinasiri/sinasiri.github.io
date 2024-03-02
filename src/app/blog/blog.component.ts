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
      date: '3 March, 2024',
      title: 'Improve Performance in your Angular Application (Part 1)',
      imageUrl: './assets/images/blog/angular.png',
      href: 'https://sinasiri.hashnode.dev/improve-performance-in-your-angular-application-part-1'
    }
  ]
}
