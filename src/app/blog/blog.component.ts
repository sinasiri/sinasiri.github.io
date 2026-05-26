import {Component} from '@angular/core';
import {AnimationOptions} from "ngx-lottie";
import {LottiePlayerComponent} from "../lottie-player/lottie-player.component";


@Component({
    selector: 'app-blog',
    imports: [LottiePlayerComponent],
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.scss'
})
export class BlogComponent {
    options: AnimationOptions = {
        path: './assets/animations/blog.json',
    };


    blogs =
        [
            {
                date: '3 March, 2024',
                title: 'Improve Performance in your Angular Application (Part 1)',
                imageUrl: './assets/images/blog/angular.png',
                href: 'https://sinasiri.hashnode.dev/improve-performance-in-your-angular-application-part-1'
            },
            {
                date: '2025',
                title: 'How I Optimized Images in Angular with NgOptimizedImage: A Deep Dive',
                imageUrl: './assets/images/blog/angular.png',
                href: 'https://medium.com/@sinasiri/how-i-optimized-images-in-angular-with-ngoptimizedimage-a-deep-dive-0f2ba2abf0a4'
            },
            {
                date: '2025',
                title: "Angular's @Input() vs Signal Inputs: Why Switch and What It Means for Big Apps",
                imageUrl: './assets/images/blog/angular.png',
                href: 'https://medium.com/@sinasiri/angulars-input-vs-signal-inputs-why-switch-and-what-it-means-for-big-apps-d614bb869ba8'
            },
            {
                date: '2025',
                title: "My Take on Angular's @let Directive: Why It's Useful, How It Works, and What to Watch Out For",
                imageUrl: './assets/images/blog/angular.png',
                href: 'https://medium.com/@sinasiri/my-take-on-angulars-let-directive-why-it-s-useful-how-it-works-and-what-to-watch-out-for-7bba1d8c3831'
            },
            {
                date: '2025',
                title: 'Master Injection Tokens for Cleaner Angular Dependency Injection',
                imageUrl: './assets/images/blog/angular.png',
                href: 'https://medium.com/@sinasiri/master-injection-tokens-for-cleaner-angular-dependency-injection-c5cc668f9ed0'
            }
        ]


    onComplete(event: any) {
        console.log(event)
    }
}
