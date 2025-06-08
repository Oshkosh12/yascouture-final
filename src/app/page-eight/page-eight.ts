import { Component } from '@angular/core';
import { MainPage } from "../main-page/main-page";
import { Look } from "../look/look";
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-page-eight',
  imports: [MainPage,Look,Footer],
  templateUrl: './page-eight.html',
  styleUrl: './page-eight.scss'
})
export class PageEight {
public lookDatas = [
    {
      name: 'LOOK 1 ',
      img: 'assets/looks2/Look-1.1-scaled.jpg.webp',
      img2:'assets/looks2/Look-1.2-768x1152.jpg.webp',
      text: 'A striking taupe gown adorned with golden lattice embroidery, crystal embellishments, and layers of soft ruffled tulle along the skirt. The fitted silhouette flows into a sheer design, exuding both elegance and movement. Complemented by a delicate, star-embroidered cape, this piece radiates timeless sophistication and grandeur.'
    },
    {
      name: 'LOOK 2',
      img: 'assets/looks2/Look-2.1-768x1152.jpg',
      img2: 'assets/lools/Look-2.2-768x1152.jpg',
      text: 'A breathtaking champagne-toned haute couture ensemble. The intricately beaded bodice, featuring a sweetheart neckline and long sleeves, complements a flowing, sheer maxi skirt adorned with delicate embellishments.  The high-slit skirt and subtle shimmer create a look that is both elegant and modern.'
    },
    {
      name: 'LOOK 3',
      img: 'assets/looks2/Look-3.1-scaled.jpg',
      img2: 'assets/looks2/Look-3.2-scaled.jpg.webp',
      text: 'A breathtaking dusty purple haute couture gown. The flowing chiffon fabric creates a dramatic silhouette with a high neckline embellished with intricate beading. Long sleeves add elegance, completing this ethereal and majestic design.'
    },
    {
      name: 'LOOK 4',
      img: 'assets/looks2/Look-4.1-scaled.jpg.webp',
      img2: 'asstes/looks2/Look-4.2-scaled.jpg.webp',
      text: 'Gunmetal beaded gown crafted from sheer tulle, embellished with cascading crystals in geometric patterns—boasting a sculpted bodice, and a dramatic slit for effortless allure.'
    },
    {
      name: 'LOOK 5',
      img: 'assets/looks2/Look-5.1-scaled.jpg.webp',
      img2: 'assets/looks2/Look-5.2-scaled.jpg.webp',
      text: 'Jet-black gown complemented by a cropped tailored bolero jacket, adorned with intricate gold beadwork and crystal embellishments. The gown features a dramatic plunge neckline and a floor-length crepe silhouette for timeless elegance.'
    },
    {
      name: 'LOOK 6',
      img: 'assets/looks2/Look-6.1-scaled.jpg.webp',
      img2: 'assets/looks2Look-6.2-scaled.jpg.webp',
      text: 'Luxurious silver gown with layers of crystal beadwork arranged in intricate patterns. The halter-style neckline, open shoulders, and flowing tulle cape embody opulent sophistication.'
    },
    {
      name: 'LOOK 7',
      img: 'assets/looks2/Look-7.1-scaled.jpg.webp',
      img2: 'assets/looks2/Look-7.2-scaled.jpg.webp',
      text: 'High-necked white gown intricately embroidered with shimmering crystals and framed by ethereal ostrich feathers. Fringe detailing adds a touch of movement to this timeless masterpiece.'
    },
    {
      name: 'LOOK 8',
      img: 'assets/looks2/Look-8.1-scaled.jpg.webp',
      img2: 'assets/looks2/Look-8.2-scaled.jpg.webp',
      text: 'Pale golden sage masterpiece with delicate crystal and bead embellishments, highlighting geometric motifs and a flowing silhouette with soft draped panels'
    },
    {
      name: 'LOOK 9',
      img: 'assets/looks2/Look-9.1.jpg.webp',
      img2: 'assets/looks2/Look-9.2-scaled.jpg.webp',
      text: 'Amber gold gown adorned with cascading crystal strands and intricate beadwork, featuring an asymmetrical cut-out bodice and a sheer flowing cape for added elegance'
    },
    { name: 'LOOK 10', 
      img: 'assets/looks2/Look-10.1-scaled.jpg.webp',
       img2: 'assets/looks2/Look-10.2-scaled.jpg.webpp',
       text:'Golden rust gown intricately detailed with sparkling crystals and beads in cascading motifs – highlighting a fitted silhouette, a slit for fluid movement, and ethereal cape sleeves.'
      },
    { name: 'LOOK 11', 
      img: 'assets/looks2/Look-11.1-scaled.jpg.webp', 
       img2: 'assets/looks2/Look-11.2-scaled.jpg.webp',
      texr:'Sculptural nude dress featuring shimmering gold rods encrusted with crystals, arranged in a starburst pattern – layered over a transparent tulle base for dramatic allure.'    
    },
    { name: 'LOOK 12',
       img: 'assets/looks2/Look-12.1-scaled.jpg.webp',
        img2: 'assets/looks2Look-12.2-scaled.jpg.webp',
        text:'Black evening gown with a sculpted corset bodice lavishly adorned in golden embellishments and shimmering stones – paired with a flowing sheer cape embroidered with gold floral accents'
      },
    { name: 'LOOK 13.',
       img: 'assets/looks2/Look-13.1-scaled.jpg.webp',
        img2: 'assets/looks2/Look-13.2-scaled.jpg.webp',
        text:'Luxurious golden gown embellished with turquoise crystals, metallic beads, and sequins in cascading scallop patterns—featuring a dramatic high neckline, cutout details at the waist, and a figure-hugging silhouette'
       },
    { name: 'LOOK 14', 
      img: 'assets/looks2/Look-14-scaled.jpg.webp' ,
      text:'Regal white gown with gold and turquoise embellishments—featuring a structured bust, cut-out waist, and a beaded, high-slit skirt, completed with a flowing chiffon train and matching jeweled arm cuffs.'
    },
      
    { name: 'LOOK 15', 
      img: 'assets/looks2/Look-15-768x1152.jpg.webp',
      text:'A stunning silver creation, embroidered with crystals and sequins in an ornamental pattern, complemented by flowing fringe and a high neckline.'
     },
    { name: 'LOOK 16', 
      img: 'assets/looks2/Look-16-600x900.jpg.webp' ,
      text:'A mesmerizing black gown inspired by the elegance of a black swan, featuring a feather-adorned bodice, a dramatic pleated mermaid skirt, and white gloves that echo timeless grace.'
    },
    { name: 'LOOK 17', 
      img: 'assets/looks2/Look-17-600x900.jpg.webp' ,
      text:'Blending grace and glamour, this white gown features intricate beaded embroidery along the borders, a daring slit, and a sophisticated hooded accent.'
    },
    { name: 'LOOK 18', 
      img: 'assets/looks2/Look-18-600x900.jpg.webp',
      text:'Flowing chiffon meets artisanal macramé in this captivating plum gown, designed with bold slits and sheer accents for the ultimate statement look.'
     },
    { name: 'LOOK 19', 
      img: 'assets/looks2/Look-19-600x900.jpg.webp',
      text:'Elegant garnet-hued gown embellished with hand-applied sequins and beads, designed with a rushed silhouette and a thigh-high slit, paired with lightweight chiffon sleeve capes.'
     },
    { name: 'LOOK 20', 
      img: 'assets/looks2/Look-20-600x900.jpg.webp',
      text:'Velvet-inspired plum jumpsuit with flowing sheer cape, enhanced by tonal beading and crystal accents'
     },
    { name: 'LOOK 21', 
      img: 'assets/looks2/Look-21-600x900.jpg.webp' ,
      text:'Purple sheer gown with hand-stitched embellishments in flowing motifs, featuring a high slit and voluminous tulle cape sleeves.'
    },
    { name: 'LOOK 22', 
      img: 'assets/looks2/Look-22-1-600x900.jpg.webp',
      text:'Fitted nude gown adorned with delicate beadwork and shimmering embroidery—paired with a detachable chiffon cape that creates a regal silhouette.'
     },
    { name: 'LOOK 23', 
      img: 'assets/looks2/Look-23-1-600x900.jpg.webp' ,
      text:'Sheer pearl-embroidered gown with a high neckline and intricate beading throughout, paired with a delicate chiffon cape for an ethereal touch.'
    },
    { name: 'LOOK 24', 
      img: 'assets/looks2/Look-24-1-600x900.jpg.webp' ,
      text:'Antique-inspired gold gown featuring intricate beadwork, a fitted silhouette, and captivating geometric patterns with bold cutout accents.'
    },
    { name: 'LOOK 25', 
      img: 'assets/looks2/Look-25-1-600x900.jpg.webp' ,
      text:'With its rich black tulle, radiant crystal embroidery, and fluid cape, this gown is a stunning blend of elegance and daring, complete with a striking slit for added allure.'
    },
    { name: 'LOOK 26',
       img: 'assets/looks2/Look-26-1-600x900.jpg.webp' ,
       text:'Sunset-inspired gown in warm orange hues, intricately adorned with shimmering beadwork and crystals in geometric lines. Showcasing a dramatic cape in translucent tulle and a high choker neckline, this ethereal design exudes confidence and sophistication.'
      },
  
  ];
}
