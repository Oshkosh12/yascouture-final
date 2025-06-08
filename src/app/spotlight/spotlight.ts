import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from "../footer/footer";

// ✅ Declare global Weglot object
declare var Weglot: any;

@Component({
  selector: 'app-spotlight',
  standalone: true,
  imports: [CommonModule, Footer],
  templateUrl: './spotlight.html',
  styleUrl: './spotlight.scss'
})
export class Spotlight {


  products = [
    {
      name: 'Shanaya Kapoor Dazzles in a Yas Couture Fall Winter 23/24  Haute Couture dress,', img: 'assets/Models/Shanaya Kapoor Dazzle.jpeg' },
    { name: 'Malaika Arora Stuns in a Yas Couture Fall Winter 23/24 Haute Couture dress,', img: 'assets/Models/Malaika Arora.jpeg' },
    { name: 'Shehnaaz Gill Dazzles in a Yas Couture Fall Winter 23/24 HauteCouture dress', img: 'assets/Models/Shahnaz Gill.jpeg' },
    { name: 'Mouni Roy Stuns in a Yas Couture Fall Winter 23/24 HauteCouture dress', img: 'assets/Models/Mouni Roy.jpeg' },
    { name: 'Deborah Cox light up the stage wearing Yas Couture Haute Couture dress during her Performance in KTUphoria,', img: 'assets/Models/Debroh Cox.jpeg' },
    { name: 'Actress Berite La Belle Stuns in "Time is Eternal" playingCleopatra role wearing Yas Couture in a dramatic gold embellished crystal gown,', img: 'assets/Models/Berite La Bella.jpeg' },
    { name: 'Dayena Erappa wearing Yas Couture Haute Couture dress', img: 'assets/Models/Diana Erappa.jpeg' },
    { name: 'The Beauty Icon Gwen Stefani glowing in a Yas Couture golden bodysuit for GXVE Beauty,', img: 'assets/Models/Gwen Stephani.jpeg' },
    { name: 'Nora Fatehi Stuns in a Multicolor tiger print dress from YasCouture', img: 'assets/Models/Nora Fatehi.jpeg' },
    { name: 'Amyra Dastur looking flawless in a Yas Couture See through mirror beaded gown', img: 'assets/Models/Amyra Dastur.jpeg' },
    { name: 'Balqees Fathi Stuns in a red beaded dressfrom Yas Couture for the hope makers in Dubai,', img: 'assets/Models/Balqees Fathi.jpeg' },
    { name: 'Golden Goddess Paris Hilton looking absolutely stunning in a Golden beaded gown from Yas Couture', img: 'assets/Models/Golden Godess.jpeg' },
    { name: 'Paris Hilton wearing a fully silver crystal-beaded see-through mini dress from Yas Couture for her music video My Best Friends Ass.', img: 'assets/Models/Paris Hilton.jpeg' },
    { name: 'Hofit Golan shines in a Yas Couture gown at the 27th Annual Elton John AIDS Foundation Academy Awards.', img: 'assets/Models/Hofit Galon.jpeg' },
    { name: 'Patrizia Yanguela stuns in a Yas Couture dress while attending the 61st Annual Grammy Awards', img: 'assets/Models/Patrizia.jpeg' },
    { name: 'Nour Al ghandour stuns in a Yas Couture dress', img: 'assets/Models/Nour Al Ghandour.jpeg' },
    { name: 'Bebe Rexha wearing a Yas Couture crystal beaded evening gown while performing on The Tonight Show starring Jimmy Fallon,', img: 'assets/Models/Bebe Rexha.jpeg' },
    { name: 'Paulina Rubio shines in a gold metallic crystal dress from Yas Couture,', img: 'assets/Models/Poulina Robio.jpeg' },
    { name: 'Yuri stuns in a Yas Couture dress for the Latin Grammys', img: 'assets/Models/Yuri Stuns.jpeg' },
    { name: 'Ashanti shines in a Yas Couture dress at the Video Music Awards', img: 'assets/Models/Ashanti SHines.jpeg' },
    { name: 'Pia Toscano stuns in a Yas Couture dress for the PolarBear Affair event in Tronto', img: 'assets/Models/Peta Murghaizia.jpeg' },
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
    // Optional: implement scroll zoom in/out
  }

  onImgMouseDown(event: MouseEvent) {
    if (this.zoomState === 'normal') return;
    this.dragging = true;
    this.startX = event.clientX - this.translateX;
    this.startY = event.clientY - this.translateY;
    this.imgEl.nativeElement.style.cursor = 'grabbing';
  }

  onImgMouseUp(event: MouseEvent) {
    if (this.zoomState === 'normal') return;
    this.dragging = false;
    this.imgEl.nativeElement.style.cursor = 'grab';
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
    let scale = 1;
    if (this.zoomState === 'in') scale = 2;
    if (this.zoomState === 'out') scale = 0.5;

    this.imgEl.nativeElement.style.transform =
      scale !== 1 ? `scale(${scale}) translate(${this.translateX}px,${this.translateY}px)` : '';
  }

  private resetImgTransform() {
    this.translateX = 0;
    this.translateY = 0;

    let scale = 1;
    if (this.zoomState === 'in') scale = 2;
    if (this.zoomState === 'out') scale = 0.5;

    this.imgEl.nativeElement.style.transform = scale !== 1 ? `scale(${scale})` : '';
    this.imgEl.nativeElement.style.cursor = scale !== 1 ? 'grab' : 'zoom-in';
  }
}