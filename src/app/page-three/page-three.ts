import { Component } from '@angular/core';
import { MainPage } from '../main-page/main-page';
import { Silder } from '../silder/silder';
import { Footer } from '../footer/footer';
import { Slidertwo } from "../slidertwo/slidertwo";
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-three',
  imports: [MainPage, Footer, Slidertwo],
  templateUrl: './page-three.html',
  styleUrl: './page-three.scss',
})
export class PageThree {
  constructor(private route: Router) {}
  images = [
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758739502/Look-7.1-600x900.jpg_hmqdpk.webp',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758739504/Look-3.1-scaled_y8fh66.jpg',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758739504/Look-15.jpg_k7uhou.webp',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758739507/2_l472qy.webp',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758739505/4_t02hah.webp',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758739524/Look_12.2_sfbyah.jpg',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758739512/Look_13.1_szakan.jpg',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758739516/Look_14_whni4y.jpg',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758739518/Look_17_kuacmm.jpg',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758739518/Look_19_y1mtak.jpg',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758739520/Look_16_zxjqtn.jpg',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758739531/Look_20_u9oziz.jpg',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758739527/Look_12.3_trrjjx.jpg',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758739533/Look_22_okuxla.jpg',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758739527/Look_23_o3sat1.jpg',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758739540/Look_8.2_agmom0.jpg',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758739537/Look_25_puhvt0.jpg',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758739536/Look_13.2_ue5jgl.jpg',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758739502/Look_9.1_blb2ae.jpg',
  ];
  images2 = [
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758740297/w11_mzpiqe.webp',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758740297/w12_qcj66i.webp',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758740298/w14_joswuh.webp',
    // 'assets/w15.webp',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758740282/Look_1.1_rcaqeg.jpg',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758740285/Look_2.1_mc3x9o.jpg',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758740288/Look_4.1_aja8ce.jpg',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758740286/Look_5.1_ks3xqh.jpg',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758740285/Look_6.1_hp9vry.jpg',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758740314/Look_8.1_hf0l05.jpg',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758740300/Look_26_kpr82f.jpg',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758740299/Look_24_ybavgn.jpg',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758740295/Look_10.1_k8dnnk.jpg',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758740299/Look_11.1_tehbn6.jpg',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758740295/Look_12.1_gzylv5.jpg',
  ];
  images3 = [
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758740595/p11_hspxl3.webp',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758740597/p12_reyxox.webp',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758740597/p13_bt7j9g.webp',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758740597/p14_nxvbok.webp',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758740598/p15_wzegut.webp',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758740604/p16_jncdn6.webp',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758740600/p17_vk0qtp.webp',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758740600/p18_ujxuup.webp',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758740601/p19_lromft.webp',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758740599/Look_5.2_bmknym.jpg',
    'https://res.cloudinary.com/dzit141xn/image/upload/v1758740648/Look_11.2_jqtkzu.jpg',
  ];
  moveNext(id: string) {
    this.route.navigate([id]);
  }
}
