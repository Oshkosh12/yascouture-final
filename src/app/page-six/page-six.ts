import { Component } from '@angular/core';
import { MainPage } from "../main-page/main-page";
import { Look } from "../look/look";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-page-six',
  imports: [MainPage, Look, Footer],
  templateUrl: './page-six.html',
  styleUrl: './page-six.scss'
})
export class PageSix {
  public lookDatas = [
    {
      name: 'LOOK 1 ',
      img: 'assets/looks/Look-1.1-scaled.jpeg.webp',
      img2: 'assets/looks/Look-1.2-600x900.jpeg.webp',
      text: 'A timeless scarlet masterpiece in textured tulle, featuring layers of ruffled tiers, a bold off-the shoulder cut, and a luxurious metallic accent at the waist….'
    },
    {
      name: 'LOOK 2',
      img: 'assets/looks/Look-2.1-scaled.jpeg.webp',
      img2: 'assets/looks/Look-2.2-600x900.jpeg.webp',
      text: 'A sculptural couture creation in gold and turquoise, intricately woven with beads, crystals, and metallic threads. The asymmetrical cut and mesh draping add movement, while the lace-up thigh-high boots complete the avant-garde look.'
    },
    {
      name: 'LOOK 3',
      img: 'assets/looks/Look-3.1-scaled.jpeg.webp',
      img2: 'assets/looks/Look-3.2-600x900.jpeg.webp',
      text: 'Dreamlike haute couture gown enriched with luminous beadwork and crystals—designed with a sculpted corset, an elegant draped train, and a built-in veil for a striking effect.'
    },
    {
      name: 'LOOK 4',
      img: 'assets/looks/Look-3.2-600x900.jpeg.webp',
      img2: 'asstes/looks/Look-3.2-600x900.jpeg.webp',
      text: 'An ivory crepe gown with crystal embellishments and delicate beading, designed with a structured crossover bodice, feather accents, and a high slit for effortless sophistication.'
    },
    {
      name: 'LOOK 5',
      img: 'assets/looks/Look-4.1-scaled.jpeg.webp',
      img2: 'assets/looks/look-4.2-600x900.jpeg.webp',
      text: 'Nude tulle gown embroidered with multicolor crystals, beads, and sequins in a geometric mosaic motif – featuring a high neckline, daring thigh-high slits, and sheer navy blue tulle long sleeves.'
    },
    {
      name: 'LOOK 6',
      img: 'assets/looks/Look-5.1-1-768x1152.jpeg.webp',
      img2: 'assets/looks/Look-5.2-1-768x1152.jpeg',
      text: 'White gown embellished with crystals and pearls in an intricate crisscross pattern – featuring a high neckline, structured shoulders, and floor-length fringed panels with daring slits.'
    },
    {
      name: 'LOOK 7',
      img: 'assets/looks/Look-6.1-scaled.jpeg.webp',
      img2: 'assets/looks/Look-6.2-600x900.jpeg.webp',
      text: 'A multicolor masterpiece, this gown dazzles with hand-embroidered crystals, beads, and sequins on sheer tulle—highlighted by dramatic cut-outs, elongated sleeves adorned with cascading fringes, and a bold slit'
    },
    {
      name: 'LOOK 8',
      img: 'assets/looks/Look-7.1-768x1152.jpeg.webp',
      img2: 'assets/looks/Look-8.2-600x900.jpeg.webp',
      text: 'Mint green gown richly embroidered with crystals, beads, and sequins—featuring a structured silhouette and side cut-outs, completed with a flowing tulle cape embellished with voluminous 3D tulle flowers.'
    },
    {
      name: 'LOOK 9',
      img: 'assets/looks/Look-9.1-768x1152.jpeg.webp',
      img2: 'assets/looks/Look-9.2-600x900.jpeg',
      text: 'Navy blue gown embroidered with silver and turquoise crystals, beads, and sequins in geometric motifs—featuring a deep V neckline, cut-out waist, and floor-length sleeve cape in sheer tulle.'
    },
    { name: 'LOOK 10',
       img: 'assets/looks/Look-10.2-600x900.jpeg.webp',
        img2: 'assets/look/Look-9.1-768x1152.jpeg.webp',
        text:'Red asymmetrical gown embroidered with crystals, beads, and sequins in geometric motifs — featuring a sculpted bodice with cut-out details and a sheer one-shoulder cape.'
        },
    { name: 'LOOK 11',
       img: 'assets/looks/Look-11.1-768x1152.jpeg.webp', 
       img2: 'assets/look/Look-11.2-600x900.jpeg.webp',
        text:'Sheer black gown embellished with multicolor crystals, beads, and sequins in intricate geometric patterns — featuring a plunging neckline, high choker collar, side slit, and a dramatic open back.'
      },
    { name: 'LOOK 12', 
      img: 'assets/looks/Look-12.1-scaled.jpeg.webp', 
      img2: 'assets/look/Look-12.2-600x900.jpeg.webp' ,
       text:'Gold embroidered gown adorned with shimmering sequins and intricate beadwork in geometric patterns – featuring a high collar, sheer sleeves, and a daring thigh-high slit. A matching embellished belt accentuates the waist, complemented by a coordinating scarf for an elegant finish.'
    },
    { name: 'LOOK 13.',
       img: 'assets/looks/Look-13-600x900.jpeg.webp',
       text:'Black gown embroidered with silver crystals, beads, and sequins in spiral and linear motifs – featuring a sheer tulle bodice, a unique Zulu-inspired beaded high neck, and a fitted skirt with a thigh-high slits'
      },
    { name: 'LOOK 14', 
      img: 'assets/looks/Look-14-scaled.jpeg.webp',
      text:'Black sheer gown adorned with tone-on-tone crystals and beads—featuring a high-neck bodice with intricate embroidery and a voluminous ruffled tulle skirt in tiered panels'
    },
    { name: 'LOOK 15', 
      img: 'assets/looks/look-15-600x900.jpeg',
      text:'White and silver gown, intricately hand-embroidered with crystals, beads, and sequins on a nude illusion base—featuring a structured high neckline, exaggerated feathered shoulders, and cascading beaded fringes for a dramatic effect'   
     },
    { name: 'LOOK 16', 
      img: 'assets/looks/Look-16-600x900.jpeg.webp',
      text:'Sophisticated black evening gown with a daring neckline and slit, paired with a floor-sweeping long sleeve cape, highlighting beadwork in silver and gold exclusively along the sleeves'
    },
    { name: 'LOOK 17', 
      img: 'assets/looks/look-17-600x900.jpeg.webp',
      text:'All-over netted gown in white, richly adorned with pearls, crystals, and silver beadwork — featuring a strapless neckline and a signature Yas Couture belt at the waist.'
    },
    { name: 'LOOK 18', 
      img: 'assets/looks/Look-18-600x900.jpeg.webp',
      text:'Ruby red gown intricately embroidered with crystals, beads, and sequins in a geometric motif— featuring multiple cutouts along the bodice and sleeves, a high neckline adorned with cascading fringes, and a layered tulle skirt with a high front slit.'
    },
    { name: 'LOOK 19', 
      img: 'assets/looks/Look-19-600x900.jpeg.webp' ,
      text:'Transparent ivory gown crafted from delicate tulle, richly embroidered with silver sequins, beads, and crystals in fluid swirl patterns—finished with voluminous feather accents along the sleeves and borders.'    
    },
    { name: 'LOOK 20', 
      img: 'assets/looks/Look-20-600x900.jpeg.webp',
      text:'Soft blush silk satin gown detailed with sculptural draping and bold cutouts, connected by oversized rings. The design showcases a front slit and flowing panels, blending modern sensuality with timeless elegance'
    },
    { name: 'LOOK 21', 
      img: 'assets/looks/Look-21-600x900.jpeg.webp',
      text:'Nude tulle gown embroidered with silver beads, crystals, and sequins in a radiating pattern— featuring a high slit skirt and a floor-length matching cape veil.'
    },
    { name: 'LOOK 22', 
      img: 'assets/looks/Look-22-600x900.jpeg.webp',
      text:'Blush nude gown embellished with silver crystals, beads, and sequins in a structured linear motif – featuring long sheer sleeves, fringe details flowing from the shoulders, a wrap kimono-style closure, and a front slit revealing a subtle train.'
    },
    { name: 'LOOK 23', 
      img: 'assets/looks/Look-23-600x900.jpeg.webp',
      text:'Ivory nude gown embroidered with crystal beads, pearls, and sequins in a cascading fringe motif – featuring a deep plunge neckline, a sheer tulle skirt, and a chiffon cape.'
     },
    { name: 'LOOK 24', 
      img: 'assets/looks/Look-24-600x900.jpeg.webp' ,
      text:'Ivory nude gown embroidered with crystal beads, pearls, and sequins in a cascading fringe motif – featuring a deep plunge neckline, a sheer tulle skirt, and a chiffon cape.'
    },
    { name: 'LOOK 25', 
      img: 'assets/looks/Look-25-600x900.jpeg.webp',
      text:'Smoky lavender gown in gathered pleated tulle – featuring voluminous ruffle accents and a high-low silhouette that extends into a sweeping train.'
    },
    { name: 'LOOK 26', 
      img: 'assets/looks/Look-26-600x900.jpeg.webp',
      text:'Bronze one-shoulder gown with an integrated cape, embellished with shimmering sequins and beads. Features a cut-out waist detail and a high slit for a contemporary, glamorous look.'
    },
    { name: 'LOOK 27', 
      img: 'assets/looks/Look-27-600x900.jpeg.webp' ,
    text:'Soft Sage Green mini dress with Delicate Crystal and Bead Embellishments. Designed with Long Sleeves, a Plunging V-Neck, and Waist Cut-Outs. Features Silk Chiffon Drapes Originating from the Shoulders and Waist, Adding an Ethereal Touch.'}
  ];
}
