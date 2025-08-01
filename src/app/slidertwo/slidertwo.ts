import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slidertwo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slidertwo.html',
  styleUrl: './slidertwo.scss',
})
export class Slidertwo {
  @Input() images: string[] = [];
  activeIndex = 1;

  // Drag state
  private dragStartX: number | null = null;
  private dragStartY: number | null = null; // ✅ NEW
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

    let extraTransform = '';
    if (this.isDragging && offset === 0) {
      extraTransform = ` translateX(${this.dragDeltaX}px)`;
    }
    if (this.isDragging && Math.abs(offset) === 1) {
      extraTransform = ` translateX(${this.dragDeltaX * 0.7}px)`;
    }

    const centerOffset = 20;
    const horizontalOffset = 0;

    if (offset === 0) {
      return {
        transform: `translateX(calc(-50% + ${horizontalOffset}px)) translateY(${centerOffset}px) scaleY(1.1)${extraTransform}`,
        opacity: 1,
        zIndex: 3,
        left: '50%',
        transition: this.isDragging ? 'none' : undefined,
      };
    }
    if (offset === -1) {
      return {
        transform: `translateX(calc(24%)) scaleY(0.9)${extraTransform}`,
        opacity: 1,
        zIndex: 2,
        left: '50%',
        transition: this.isDragging ? 'none' : undefined,
      };
    }
    if (offset === 1) {
      return {
        transform: `translateX(calc(-127%)) scaleY(0.9)${extraTransform}`,
        opacity: 1,
        zIndex: 2,
        left: '50%',
        transition: this.isDragging ? 'none' : undefined,
      };
    }
    return {
      transform: `translateX(calc(-50% + ${offset * 65}%))`,
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
    this.dragStartY = this.getPointerY(event); // ✅ NEW
    this.dragDeltaX = 0;
    event.preventDefault();
  }

  onDragMove(event: MouseEvent | TouchEvent) {
    if (!this.isDragging || this.dragStartX === null || this.dragStartY === null) return;

    const currentX = this.getPointerX(event);
    const currentY = this.getPointerY(event);

    const deltaX = currentX - this.dragStartX;
    const deltaY = currentY - this.dragStartY;

    // ✅ Cancel drag if vertical movement is greater than horizontal
    if (Math.abs(deltaY) > Math.abs(deltaX)) return;

    this.dragDeltaX = deltaX;
  }

  onDragEnd(event: MouseEvent | TouchEvent) {
    if (!this.isDragging || this.dragStartX === null) return;

    const threshold = 60;

    if (this.dragDeltaX > threshold) {
      this.nextSlide();
    } else if (this.dragDeltaX < -threshold) {
      this.prevSlide();
    }

    this.isDragging = false;
    this.dragStartX = null;
    this.dragStartY = null;
    this.dragDeltaX = 0;
  }

  getPointerX(event: MouseEvent | TouchEvent): number {
    if (event instanceof TouchEvent) {
      return event.touches[0]?.clientX ?? event.changedTouches[0]?.clientX ?? 0;
    }
    return event.clientX;
  }

  getPointerY(event: MouseEvent | TouchEvent): number {
    if (event instanceof TouchEvent) {
      return event.touches[0]?.clientY ?? event.changedTouches[0]?.clientY ?? 0;
    }
    return event.clientY;
  }
}
