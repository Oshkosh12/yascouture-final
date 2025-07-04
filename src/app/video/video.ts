import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-video',
  standalone: true,
  templateUrl: './video.html',
  styleUrl: './video.scss',
})
export class Video implements AfterViewInit {
  @ViewChild('myVideo') myVideo!: ElementRef<HTMLVideoElement>;
  @Input() videoref: string = "";

  ngAfterViewInit(): void {
    const video = this.myVideo.nativeElement;

    video.muted = true; 
    video.playsInline = true;
    video.load();

    // Try to play
    video.play().catch(err => {
      console.warn('Autoplay failed:', err);
    });
  }
}
