import { Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MainPage } from "../main-page/main-page";
import { SliderFour } from "../slider-four/slider-four";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-looksshow',
  standalone: true,
  imports: [CommonModule, MainPage, SliderFour, Footer],
  templateUrl: './looksshow.html',
  styleUrls: ['./looksshow.scss'],
})
export class Looksshow {
  @Input() item: { allpictures: string[]; pictures: string[]; name: string; text: string } | null = null;

  receivedImage: string = '';
  receivedText:string = '';
  currentIndex = 0;
  startX = 0;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras.state as {
      items?: { allpictures: string[]; pictures: string[]; name: string; text: string }[];
    };

    if (state?.items && state.items.length > 0) {
      this.item = state.items[0];
      console.log(this.item)
    }
  }

  receiveValue(value: string) {
    var origval = value;
    this.receivedImage = origval.split(',')[0];
    this.receivedText = value.split(',')[1];
  }

  resetSelectedImage() {
    this.receivedImage = '';
  }

  moveSlide(direction: number) {
    if (!this.item || !this.item.pictures.length) return;
    const total = this.item.pictures.length;
    this.currentIndex = (this.currentIndex + direction + total) % total;
  }

  moveNext(id: string) {
    this.router.navigate([id]);
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    const delta = event.changedTouches[0].clientX - this.startX;
    if (delta < -50) this.moveSlide(1);
    else if (delta > 50) this.moveSlide(-1);
  }

  zoomIn(event: MouseEvent) {
    const img = (event.currentTarget as HTMLElement).querySelector('img');
    if (img) {
      img.style.transform = `scale(1.8)`;
    }
  }

  zoomMove(event: MouseEvent) {
    const wrapper = event.currentTarget as HTMLElement;
    const img = wrapper.querySelector('img');
    if (!img) return;

    const rect = wrapper.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    const percentX = (offsetX / rect.width) * 100;
    const percentY = (offsetY / rect.height) * 100;

    img.style.transformOrigin = `${percentX}% ${percentY}%`;
  }

  zoomOut(event: MouseEvent) {
    const img = (event.currentTarget as HTMLElement).querySelector('img');
    if (img) {
      img.style.transform = 'scale(1)';
    }
  }
}
