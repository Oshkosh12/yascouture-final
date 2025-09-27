import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider-four',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider-four.html',
  styleUrls: ['./slider-four.scss']
})
export class SliderFour implements OnInit, OnDestroy {
  @Input() imagesArry: string[] = [];
  @Output() valueChange = new EventEmitter<string>();
  @Output() valueChange1 = new EventEmitter<{ flag: boolean; message: string }>();
  
  // Ab hum groupedImages ki jagah direct images use karenge
  filteredImages: { url: string }[] = [];
  currentIndex = 0;
  private resizeListener: (() => void) = () => {};
  slidesToShow = 4; // Ek time par kitni slides dikhegi

  // Jin indexes ki images remove karni hain
  private imagesToRemove = [6, 7, 11];

  ngOnInit() {
    this.prepareImages();
    this.updateSlidesToShow();
    this.resizeListener = this.onResize.bind(this);
    window.addEventListener('resize', this.resizeListener);
  }

  ngOnDestroy() {
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
    }
  }

  onResize() {
    this.updateSlidesToShow();
  }

  updateSlidesToShow() {
    const width = window.innerWidth;
    if (width <= 480) this.slidesToShow = 1;
    else if (width <= 768) this.slidesToShow = 2;
    else if (width <= 1024) this.slidesToShow = 3;
    else this.slidesToShow = 4;
  }

  prepareImages() {
    const filtered = this.imagesArry.filter((img, index) => 
      !this.imagesToRemove.includes(index)
    );
    
    this.filteredImages = filtered.map(url => ({ url }));
  }

  buttonClicked(val: string) {
    this.valueChange1.emit({ flag: true, message: val });
  }

  sendValue(val: string) {
    console.log(val);
    this.valueChange.emit(val);
  }

moveSlide(direction: number) {
  const totalSlides = this.filteredImages.length;
  const maxIndex = totalSlides - this.slidesToShow;
  if (direction === 1) {
    if (this.currentIndex >= maxIndex) {
      this.currentIndex = 0; 
    } else {
      this.currentIndex++;
    }
  } else if (direction === -1) {
    if (this.currentIndex <= 0) {
      this.currentIndex = maxIndex; 
    } else {
      this.currentIndex--;
    }
  }
}

  calculateTransform(): string {
    return `translateX(-${this.currentIndex * (100 / this.slidesToShow)}%)`;
  }
}