import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-look',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './look.html',
  styleUrls: ['./look.scss'],
})
export class Look {
  constructor(private route: Router) { }

  // Make lookData an array and initialize all items here
  @Input() lookData: {
    name: string;
    img: string;
    img2?: string;
    text?: string;
  }[] = [
      {
        name: 'LOOK 1',
        img: 'assets/looks/Look-27-600x900.jpeg.webp',
        text: 'Soft Sage Green mini dress with Delicate Crystal and Bead Embellishments...',
      },
      {
        name: 'LOOK 2',
        img: 'assets/looks/Look-1.2-600x900.jpeg.webp',
        img2: 'assets/lools/Look-1.1-scaled.jpeg.webp',
        text: 'A timeless scarlet masterpiece in textured tulle...',
      },
      {
        name: 'LOOK 3',
        img: 'assets/looks/Look-2.2-600x900.jpeg.webp',
        img2: 'assets/looks/Look-1.2-600x900.jpeg.webp',
        text: 'A sculptural couture creation in gold and turquoise...',
      },
      {
        name: 'LOOK 4',
        img: 'assets/looks/Look-3.2-600x900.jpeg.webp',
        img2: 'asstes/looks/Look-3.2-600x900.jpeg.webp',
        text: 'Dreamlike haute couture gown enriched with luminous beadwork and crystals...',
      },
      {
        name: 'LOOK 5',
        img: 'assets/looks/look-4.2-600x900.jpeg.webp',
        img2: 'assets/looks/Look-4.1-scaled.jpeg.webp',
        text: 'An ivory crepe gown with crystal embellishments and delicate beading...',
      },
      {
        name: 'LOOK 6',
        img: 'assets/looks/Look-5.2-1-600x900.jpeg.webp',
        img2: 'assets/looks/Look-5.2-1-768x1152.jpeg',
        text: 'Nude tulle gown embroidered with multicolor crystals...',
      },
      {
        name: 'LOOK 7',
        img: 'assets/looks/Look-6.2-600x900.jpeg.webp',
        img2: 'assets/looks/Look-6.2-600x900.jpeg.webp',
        text: 'Nude tulle gown embroidered with multicolor crystals...',
      },
      {
        name: 'LOOK 8',
        img: 'assets/looks/Look-7.2-600x900.jpeg.webp',
        img2: 'assets/looks/Look-6.2-scaled.jpeg',
        text: 'White gown embellished with crystals and pearls...',
      },
      {
        name: 'LOOK 9',
        img: 'assets/looks/Look-8.2-600x900.jpeg.webp',
        img2: 'assets/looks/Look-7.2-600x900.jpeg.webp',
        text: 'A multicolor masterpiece, this gown dazzles with hand-embroidered crystals...',
      },
      {
        name: 'LOOK 10',
        img: 'assets/looks/Look-9.2-600x900',
        img2: 'Look-8.1-768x1152.jpeg.webp',
      },
      {
        name: 'LOOK 11',
        img: 'assets/looks/Look-10.2-600x900.jpeg.webp',
        img2: 'Look-9.1-768x1152.jpeg.webp',
      },
      {
        name: 'LOOK 12',
        img: 'assets/looks/Look-11.2-600x900.jpeg.webp',
        img2: 'Look-10.2-600x900.jpeg.webp',
      },
      {
        name: 'LOOK 13.',
        img: 'assets/looks/Look-12.2-600x900.jpeg.webp',
        img2: 'Look-12.1-scaled.jpeg.webp',
      },
      {
        name: 'LOOK 14',
        img: 'assets/looks/Look-13-600x900.jpeg.webp',
      },
      {
        name: 'LOOK 15',
        img: 'assets/looks/Look-14-scaled.jpeg.webp',
      },
      {
        name: 'LOOK 16',
        img: 'assets/looks/look-15-600x900',
      },
      {
        name: 'LOOK 17',
        img: 'assets/looks/Look-16-600x900.jpeg.webp',
      },
      {
        name: 'LOOK 18',
        img: 'assets/looks/look-17-600x900.jpeg.webp',
      },
      {
        name: 'LOOK 19',
        img: 'assets/looks/Look-18-600x900.jpeg.webp',
      },
      {
        name: 'LOOK 20',
        img: 'assets/looks/Look-19-600x900.jpeg.webp',
      },
      {
        name: 'LOOK 21',
        img: 'assets/looks/Look-20-600x900.jpeg.webp',
      },
      {
        name: 'LOOK 22',
        img: 'assets/looks/Look-21-600x900.jpeg.webp',
      },
      {
        name: 'LOOK 23',
        img: 'assets/looks/Look-22-600x900.jpeg.webp',
      },
      {
        name: 'LOOK 24',
        img: 'assets/looks/Look-23-600x900.jpeg.webp',
      },
      {
        name: 'LOOK 25',
        img: 'assets/looks/Look-24-600x900.jpeg.webp',
      },
      {
        name: 'LOOK 26',
        img: 'assets/looks/Look-25-600x900.jpeg.webp',
      },
      {
        name: 'LOOK 27',
        img: 'assets/looks/Look-26-600x900.jpeg.webp',
      },
    ];
  ngOnInit() {
    // Collect all primary and secondary images (img and img2 if present)
    this.allPictures = [];

    this.lookData.forEach(product => {
      this.allPictures.push(product.img + ',' + product.text);
    });
  }
  allPictures: string[] = [];
  showLookDetails(item: { allpictures: string[]; pictures: string[]; name: string; text?: string }) {
    this.route.navigate(['/looksShow'], {
      state: {
        items: [item],
      },
    });
  }

  getImages(product: { img: string; img2?: string }): string[] {
    const images = [product.img];
    if (product.img2) {
      images.push(product.img2);
    }
    return images;
  }
}
