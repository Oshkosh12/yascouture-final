import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from "../footer/footer";
@Component({
  selector: 'app-spotlight',
  standalone: true,
  imports: [CommonModule, Footer],
  templateUrl: './spotlight.html',
  styleUrl: './spotlight.scss'
})
export class Spotlight {
  products = [
    { name: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', img: 'assets/image1.jpeg' },
    { name: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', img: 'assets/image2.jpeg' },
    { name: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', img: 'assets/image3.jpeg' },
    { name: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', img: 'assets/image4.jpeg' },
    { name: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', img: 'assets/image5.jpeg' },
    { name: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', img: 'assets/image6.jpeg' },
    { name: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', img: 'assets/image7.jpeg' },
    { name: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', img: 'assets/image8.jpeg' },
    { name: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', img: 'assets/image9.jpeg' },
    { name: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', img: 'assets/image11.jpeg' },
    { name: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', img: 'assets/image12.jpeg' },
    { name: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', img: 'assets/image14.jpeg' },
    { name: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', img: 'assets/image15.jpeg' },
    { name: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', img: 'assets/image16.jpeg' },
    { name: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', img: 'assets/image21.jpeg' },
    { name: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', img: 'assets/image18.jpeg' },
    { name: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', img: 'assets/image19.jpeg' },
    { name: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', img: 'assets/image20.jpeg' },
    { name: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', img: 'assets/image21.jpeg' },
    { name: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', img: 'assets/image1.jpeg' },
    { name: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,', img: 'assets/image2.jpeg' },
  ];

  viewerOpen = false;
  selectedIndex = 0;
  zoomState: 'normal' | 'in' | 'out' = 'normal';
  showShare = false;

  @ViewChild('imgEl', { static: false }) imgEl!: ElementRef<HTMLImageElement>;
  private dragging = false;
  private startX = 0;
  private startY = 0;
  private translateX = 0;
  private translateY = 0;

  openViewer(index: number) {
    this.selectedIndex = index;
    this.viewerOpen = true;
    this.zoomState = 'normal';
    this.showShare = false;
    this.resetImgTransform();
  }

  closeViewer() {
    this.viewerOpen = false;
    this.zoomState = 'normal';
    this.showShare = false;
    this.resetImgTransform();
  }

  prevImage(event: Event) {
    event.stopPropagation();
    this.selectedIndex = (this.selectedIndex === 0) ? this.products.length - 1 : this.selectedIndex - 1;
    this.zoomState = 'normal';
    this.showShare = false;
    this.resetImgTransform();
  }

  nextImage(event: Event) {
    event.stopPropagation();
    this.selectedIndex = (this.selectedIndex === this.products.length - 1) ? 0 : this.selectedIndex + 1;
    this.zoomState = 'normal';
    this.showShare = false;
    this.resetImgTransform();
  }

  toggleZoom(event: Event) {
    event.stopPropagation();
    if (this.zoomState === 'normal') {
      this.zoomState = 'in';
    } else if (this.zoomState === 'in') {
      this.zoomState = 'out';
    } else {
      this.zoomState = 'normal';
    }
    this.resetImgTransform();
  }

  toggleFullScreen(event: Event) {
    event.stopPropagation();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }

  toggleShare(event: Event) {
    event.stopPropagation();
    this.showShare = !this.showShare;
  }

  shareLink(event: Event, platform: string) {
    event.stopPropagation();
    const imgUrl = this.products[this.selectedIndex].img;
    if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(imgUrl)}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(imgUrl)}`, '_blank');
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(imgUrl);
    }
    this.showShare = false;
  }

  onWheel(event: WheelEvent) {
    // Optional: implement scroll zoom in/out, currently not used.
  }

  onImgMouseDown(event: MouseEvent) {
    if (this.zoomState === 'normal') return;
    this.dragging = true;
    this.startX = event.clientX - this.translateX;
    this.startY = event.clientY - this.translateY;
    if (this.imgEl && this.imgEl.nativeElement) {
      this.imgEl.nativeElement.style.cursor = 'grabbing';
    }
  }

  onImgMouseUp(event: MouseEvent) {
    if (this.zoomState === 'normal') return;
    this.dragging = false;
    if (this.imgEl && this.imgEl.nativeElement) {
      this.imgEl.nativeElement.style.cursor = 'grab';
    }
  }

  onImgMouseMove(event: MouseEvent) {
    if (this.zoomState === 'normal' || !this.dragging) return;
    this.translateX = event.clientX - this.startX;
    this.translateY = event.clientY - this.startY;
    this.setImgTransform();
  }

  onImgMouseLeave(event: MouseEvent) {
    if (this.zoomState === 'normal') return;
    this.dragging = false;
    this.resetImgTransform();
  }

  private setImgTransform() {
    if (this.imgEl && this.imgEl.nativeElement) {
      let scale = 1;
      if (this.zoomState === 'in') scale = 2;
      if (this.zoomState === 'out') scale = 0.5;
      this.imgEl.nativeElement.style.transform =
        scale !== 1
          ? `scale(${scale}) translate(${this.translateX}px,${this.translateY}px)`
          : '';
    }
  }

  private resetImgTransform() {
    this.translateX = 0;
    this.translateY = 0;
    if (this.imgEl && this.imgEl.nativeElement) {
      let scale = 1;
      if (this.zoomState === 'in') scale = 2;
      if (this.zoomState === 'out') scale = 0.5;
      this.imgEl.nativeElement.style.transform =
        scale !== 1 ? `scale(${scale})` : '';
      this.imgEl.nativeElement.style.cursor =
        scale !== 1 ? 'grab' : 'zoom-in';
    }
  }
}