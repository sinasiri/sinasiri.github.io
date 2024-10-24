import {Routes} from '@angular/router';
import {BlogComponent} from "./blog/blog.component";
import {ExperienceComponent} from "./experience/experience.component";
import {HomeComponent} from "./home/home.component";
import {EducationComponent} from "./education/education.component";
import {ContactComponent} from "./contact/contact.component";
import {ProjectsComponent} from "./projects/projects.component";
import {WeddingComponent} from "./wedding/wedding.component";

export const routes: Routes = [
  {component: WeddingComponent, path: ''},
  // {component: BlogComponent, path: 'blog'},
  // {component: ExperienceComponent, path: 'experience'},
  // {component: ProjectsComponent, path: 'projects'},
  // {component: ContactComponent, path: 'contact'},
  // {component: EducationComponent, path: 'education'},
];
