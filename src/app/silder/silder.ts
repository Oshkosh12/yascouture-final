import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-silder',
  imports: [CommonModule],
  templateUrl: './silder.html',
  styleUrl: './silder.scss',
})
export class Silder {
  images = [
    'assets/img1.jpg',
    'assets/img2.jpg',
    'assets/img3.jpg',
    'assets/img4.jpg'
  ];
  activeIndex = 1;

  prevSlide() {
    this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
  }

  getSlideStyle(index: number) {
    const offset = index - this.activeIndex;
    if (Math.abs(offset) > 1) {
      return {
        transform: 'scale(0.8) translateX(0vw) perspective(1200px) ',
        opacity: 0,
        zIndex: 0,
        pointerEvents: 'none',
      };
    }
    if (offset === 0) {
      return {
        transform: 'scale(1) translateX(0vw) perspective(1200px) ',
        opacity: 1,
        zIndex: 2,
      };
    }
    const direction = offset > 0 ? 1 : -1;
    return {
      transform: `scale(0.88) translateX(${direction * 18}vw) perspective(1200px) `,
      opacity: 0.85,
      zIndex: 1,
    };
  }
}