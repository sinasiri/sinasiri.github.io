import {Component} from '@angular/core';

@Component({
  selector: 'app-wedding',
  standalone: true,
  imports: [],
  templateUrl: './wedding.component.html',
  styleUrl: './wedding.component.scss'
})
export class WeddingComponent {
  openLink = (link: any) => {
    window.open(link, '_blank')
  }

  openInWaze() {
    const latitude = 35.6327291
    const longitude = 51.1900181
    const wazeUrl = `https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`;
    window.open(wazeUrl)
  }

  openInNeshan() {
    window.open('https://neshan.org/maps/places/_bQKkUOxGysW#c35.633-51.191-19z-0p', '_blank')
  }


}
