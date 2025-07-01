import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video',
  imports: [],
  templateUrl: './video.html',
  styleUrl: './video.scss'
})
export class Video {
  @ViewChild('myVideo') myVideo!: ElementRef<HTMLVideoElement>;
  @Input() videoref:string = "";
  ngAfterViewInit(): void {
    const video = this.myVideo.nativeElement;
    video.muted = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;
    video.load();
    video.play().catch(() => { });
  }
}
