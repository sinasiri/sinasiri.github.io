import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-wedding',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './wedding.component.html',
  styleUrl: './wedding.component.scss'
})
export class WeddingComponent implements AfterViewInit {


  videoLoaded = false;
  openLink = () => {
    const url = 'https://www.google.com/maps?q=35.6327291,51.1900181';
    window.open(url, '_blank')
  }

  openInWaze() {
    const latitude = 35.6327291
    const longitude = 51.1900181
    const wazeUrl = `https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`;
    window.open(wazeUrl, '_blank')
  }

  openInNeshan() {
    window.open('https://nshn.ir/e97bQKXxGxGy7o', '_blank')
  }

  onVideoLoaded() {
    this.videoLoaded = true;
  }


  ngAfterViewInit(): void {
    const video: HTMLVideoElement | null = document.querySelector('video');
    if (video) {
      video.muted = true;  // Ensure video is muted
      video.play().catch(error => {
        console.error('Video autoplay prevented', error);
      });
    }
  }

  isMuted = true; // Start video muted

  toggleMute() {
    const video: HTMLVideoElement | null = document.querySelector('video');
    this.isMuted = !this.isMuted;
    video.muted = this.isMuted;
  }

}
