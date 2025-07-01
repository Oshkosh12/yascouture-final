import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider-four',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider-four.html',
  styleUrls: ['./slider-four.scss']
})
export class SliderFour {
  @Input() imagesArry: string[] = [];
  @Output() valueChange = new EventEmitter<string>();

  @Output() valueChange1 = new EventEmitter<{ flag: boolean; message: string }>();
  groupedImages: { url: string }[][] = [];
  currentIndex = 0;

  ngOnInit() {
    this.groupImages();
    window.addEventListener('resize', this.onResize.bind(this));
  }

  onResize() {
    this.groupedImages = [];
    this.groupImages();
  }

  buttonClicked(val:string) {
    this.valueChange1.emit({ flag: true, message: val });
  }
  sendValue(val: string) {
    console.log(val);
    this.valueChange.emit(val);
  }

  groupImages() {
    let chunkSize = 4;
    const width = window.innerWidth;

    if (width <= 480) chunkSize = 1;
    else if (width <= 768) chunkSize = 2;
    else if (width <= 1024) chunkSize = 3;

    for (let i = 0; i < this.imagesArry.length; i += chunkSize) {
      const chunk = this.imagesArry.slice(i, i + chunkSize);
      const chunkWithUrlObjects = chunk.map(url => ({ url }));
      this.groupedImages.push(chunkWithUrlObjects);
    }
  }

  moveSlide(direction: number) {
    const totalSlides = this.groupedImages.length;
    this.currentIndex = (this.currentIndex + direction + totalSlides) % totalSlides;
  }
}
