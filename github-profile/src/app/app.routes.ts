import {Routes} from '@angular/router';
import {BlogComponent} from "./blog/blog.component";
import {ExperienceComponent} from "./experience/experience.component";

export const routes: Routes = [
  {component: BlogComponent, path: 'blog'},
  {component: ExperienceComponent, path: 'experience'},
];
