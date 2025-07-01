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
    { name: 'Shanaya Kapoor Dazzles in a Yas Couture Fall Winter 23/24  Haute Couture dress,', img: 'assets/Models/46.jpg' },
{ name: 'Vu Ngoc Anh stuns in a Yas Couture Gown as she attends Cannes Film Festival.', img: 'assets/Models/47.jpg' },
{ name: 'Jennifer Lopez graces the stage for the Robin Hood Foundation in New York wearing a Yas Couture costume.', img: 'assets/Models/48.jpeg' },
{ name: 'MYA wearing a Yas Couture beaded off white crop top with a high waisted fringes skirt as featured on the Runway Magazine', img: 'assets/Models/49.jpeg' },
{ name: 'Beautiful Illustration by the talented Chantelle Shamoun for Jennifer Lopez look for her Music Video “EL Anillo “ wearing Yas Couture', img: 'assets/Models/50.jpeg' },
{ name: 'Mel B Dazzle in a Yas Couture Crystal beaded mini dress while attending Amercia’s Got Talent Season 13,', img: 'assets/Models/51.jpeg' },
{ name: 'Peta Murgatroyd Stuns in a Yas Couture dress asfeatured on the Runway Magazine', img: 'assets/Models/52.jpeg' },
{ name: 'Ashanti wearing a Yas Couture shimmering and dripping crystals dress', img: 'assets/Models/53.jpeg' },
{ name: 'Pia Toscano stuns in a Yas Couture dress for the PolarBear Affair event in Tronto', img: 'assets/Models/54.jpg' },

{ name: 'Paris Hilton Stuns in a Yas Couture dress while attending the HBO Golden Globes Awards', img: 'assets/Models/56-1.jpeg' },


{ name: 'Jennifer Lopez in a Yas Couture Costume during her show in Dubai', img: 'assets/Models/60.jpeg' },
{ name: 'Jennifer Lopez in a Yas Couture Costume during her show in Dubai', img: 'assets/Models/61.jpeg' },
{ name: 'Carrie Underwood stuns for the Sunday Night Football Intro in a Yas Couture dress', img: 'assets/Models/62.jpeg' },
{ name: 'Katy Perry Shines in a Yas Couture silver embellished catsuit dress for the Video Music Awards', img: 'assets/Models/63.jpeg' },
{ name: 'Mel B wearing a colorful beaded dress from Yas Couture for the latest episode of American Got Talent', img: 'assets/Models/64.jpeg' },
{ name: 'Mel B wearing a colorful beaded dress from Yas Couture for the latest episode of American Got Talent', img: 'assets/Models/65.jpeg' },
{ name: 'Paris Hilton slay the foam and diamond party in Ibiza wearing a full shimmering Swarovski beaded dress from Yas Couture.', img: 'assets/Models/66.jpeg' },
{ name: 'WWE Diva Barbie Blank stuns in a Yas Couture black beaded mini dress for Miami Swim Week', img: 'assets/Models/67.jpeg' },
{ name: 'Uldouz Stuns in a Yas Couture black beaded mini dress', img: 'assets/Models/68.jpeg' },
{ name: 'Paris Hilton stuns in a Yas Couture dress while attending the Foam and Diamonds opening session in Ibiza', img: 'assets/Models/69.jpeg' },
{ name: 'Yuri Shines in a Yas Couture Silver shimmering Swarovski beaded dress with fringes from Yas Couture', img: 'assets/Models/70.jpeg' },
{ name: 'Thalia dazzle in a Haute Couture dress while attending the 71stAnnual Tony Awards.', img: 'assets/Models/71.jpeg' },
{ name: 'Carrie Underwood Stuns in a Yas Couture dress while attending the CMT Awards', img: 'assets/Models/72.jpeg' },
{ name: 'Uldouz Shines in a Yas Couture crystal beaded bodysuit', img: 'assets/Models/73.jpeg' },
{ name: 'Uldouz wearing a Yas Couture dress', img: 'assets/Models/74.jpeg' },
{ name: 'Victoria Bonya Stuns in a Yas Couture red lace beaded gown', img: 'assets/Models/75.jpeg' },
{ name: 'Hofit Golan Shines in a Yas Couture dress for the amfAR Gala Cannes', img: 'assets/Models/76.jpeg' },
{ name: 'Uldouz wearing a Yas Couture dress as featured on Premium Magazine', img: 'assets/Models/77.jpeg' },
{ name: 'Reign Edwards wearing a Yas Couture dress while attending the 44th annual daytime Emmy Awards', img: 'assets/Models/78.jpeg' },
{ name: 'Reign Edwards wearing a Yas Couture dress while attending the 44th annual daytime Emmy Awards.', img: 'assets/Models/79.jpeg' },
{ name: 'Lilit Hovhannisyan Stuns in a Yas Couture dress..', img: 'assets/Models/80.jpeg' },
{ name: 'Nicole Sheridan Stuns in a Yas Couture dress while attending The Vanity Fair after party with her husband Mr. Taylor Sheridan.', img: 'assets/Models/81.jpeg' },
{ name: 'Paulina Rubio wearing a Yas Couture dress while attending The 59th Annual Grammy Awards.', img: 'assets/Models/82.jpg' },
{ name: 'Lilit Hovhannisyan Stuns in a Yas Couture dress for American Music Awards', img: 'assets/Models/83.jpeg' },
{ name: 'Shirine David Shines in a Yas Couture dress', img: 'assets/Models/84.jpeg' },
{ name: 'Carrie Underwood Shines in a Yas Couture dress for the CMA Awards.', img: 'assets/Models/85.jpeg' },
{ name: 'Toni Braxton wearing a Yas Couture dress for the Hits Tour', img: 'assets/Models/86.jpeg' },
{ name: 'Thalia Shines in a Yas Couture dress for her Latina Love Tour in New York', img: 'assets/Models/87.jpeg' },
{ name: 'Thalia Stuns in a Yas Couture dress for her Latina Love Tour in New York', img: 'assets/Models/88.jpeg' },
{ name: 'Zhavea wearing a Yas Couture dress', img: 'assets/Models/89.jpeg' },
{ name: 'Karen Manco stuns in a Yas Couture dress', img: 'assets/Models/90.jpeg' },
{ name: 'Jennifer Lopez performs at Qatar Airways Gala at the FoxTheater in Atlanta Wearing a Yas Couture Costume', img: 'assets/Models/92.jpeg' },
{ name: 'Carrie Underwood Stuns in a Yas Couture dress for the American Country Countdown Awards', img: 'assets/Models/94.jpeg' },
{ name: 'The judges: Harry Connick Jr, Jennifer Lopez and Keith Urban entered onstage during the finale', img: 'assets/Models/95.jpg' },
{ name: 'Bai Ling wearing a Yas Couture dress as featured on the cover of Gia’s Magazine', img: 'assets/Models/97.jpeg' },
{ name: 'Cynthia Olav Stuns in a Yas Couture dress', img: 'assets/Models/98.jpeg' },
{ name: 'Anahi Giovanna Wearing a Yas Couture look for the Premios Juventud', img: 'assets/Models/99.jpeg' },
{ name: 'Paris Hilton Stuns in a Yas Couture dress.', img: 'assets/Models/100.jpeg' },

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