import {Component, Input} from '@angular/core';


@Component({
    selector: 'app-cv',
    imports: [],
    templateUrl: './cv.component.html',
    styleUrl: './cv.component.scss'
})
export class CvComponent {
  @Input() buyMeACoffee = true;
}
