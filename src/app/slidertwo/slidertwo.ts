import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slidertwo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slidertwo.html',
  styleUrl: './slidertwo.scss',
})
export class Slidertwo {
  images = [
    'assets/image1.jpeg',
    'assets/image2.jpeg',
    'assets/image3.jpeg',
    'assets/image4.jpeg',
    'assets/image5.jpeg',
    'assets/image6.jpeg',
    'assets/image7.jpeg',
    'assets/image8.jpeg',
    'assets/image9.jpeg',
    'assets/image11.jpeg',
  ];
  activeIndex = 1;

  // Drag state
  private dragStartX: number | null = null;
  private dragDeltaX: number = 0;
  private isDragging = false;

  @ViewChild('sliderTrack', { static: true }) sliderTrack!: ElementRef<HTMLDivElement>;

  prevSlide() {
    this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
  }

  getSlideStyle(i: number) {
    const total = this.images.length;
    let offset = i - this.activeIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    // Drag feedback for center & sides
    let extraTransform = '';
    if (this.isDragging && offset === 0) {
      extraTransform = ` translateX(${this.dragDeltaX}px)`;
    }
    if (this.isDragging && Math.abs(offset) === 1) {
      extraTransform = ` translateX(${this.dragDeltaX * 0.7}px)`;
    }

    if (offset === 0) {
      return {
        transform: `translateX(-50%) scale(1)${extraTransform}`,
        opacity: 1,
        zIndex: 3,
        left: '50%',
        transition: this.isDragging ? 'none' : undefined,
      };
    }
    if (offset === -1) {
      return {
        transform: `translateX(calc(40%)) scale(1, 0.77)${extraTransform}`,
        opacity: 1,
        zIndex: 2,
        left: '50%',
        transition: this.isDragging ? 'none' : undefined,
      };
    }
    if (offset === 1) {
      return {
        transform: `translateX(calc(-140%)) scale(1, 0.77)${extraTransform}`,
        opacity: 1,
        zIndex: 2,
        left: '50%',
        transition: this.isDragging ? 'none' : undefined,
      };
    }
    return {
      transform: `translateX(calc(-50% + ${offset * 65}%)) scale(0.92, 0.77)`,
      opacity: 0,
      zIndex: 1,
      left: '50%',
      pointerEvents: 'none',
    };
  }

  getSideClass(i: number): string {
    const total = this.images.length;
    let offset = i - this.activeIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    if (offset === 0) return 'center';
    if (Math.abs(offset) === 1) return 'side';
    return '';
  }

  // --- Drag logic ---
  onDragStart(event: MouseEvent | TouchEvent) {
    this.isDragging = true;
    this.dragStartX = this.getPointerX(event);
    this.dragDeltaX = 0;
    event.preventDefault();
  }

  onDragMove(event: MouseEvent | TouchEvent) {
    if (!this.isDragging || this.dragStartX === null) return;
    const currentX = this.getPointerX(event);
    this.dragDeltaX = currentX - this.dragStartX;
  }

onDragEnd(event: MouseEvent | TouchEvent) {
  if (!this.isDragging || this.dragStartX === null) return;
  const threshold = 60; // px to trigger slide
  if (this.dragDeltaX > threshold) {
    this.prevSlide();
  } else if (this.dragDeltaX < -threshold) {
    this.nextSlide();
  }
  // Reset
  this.isDragging = false;
  this.dragStartX = null;
  this.dragDeltaX = 0;
}

  getPointerX(event: MouseEvent | TouchEvent): number {
    if (event instanceof TouchEvent) {
      return event.touches[0]?.clientX ?? event.changedTouches[0]?.clientX ?? 0;
    }
    return event.clientX;
  }
}