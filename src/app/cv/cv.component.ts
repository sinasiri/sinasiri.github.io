import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-cv',
    imports: [NgIf],
    templateUrl: './cv.component.html',
    styleUrl: './cv.component.scss'
})
export class CvComponent {
  @Input() buyMeACoffee = true;
}
