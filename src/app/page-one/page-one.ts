import { Component } from "@angular/core"
import { MainPage } from "../main-page/main-page"
import { Silder } from "../silder/silder"
import { Footer } from "../footer/footer"
import { Slidertwo } from "../slidertwo/slidertwo"
import { SliderThree } from "../slider-three/slider-three"
import { Router } from "@angular/router"
import { SliderFour } from "../slider-four/slider-four"
@Component({
  selector: "app-page-one",
  imports: [MainPage, Silder, Footer, Slidertwo, SliderThree, SliderFour],
  templateUrl: "./page-one.html",
  styleUrls: ["./page-one.scss"],
})
export class PageOne {
  constructor(private route: Router) {}
  images2 = [
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758729801/1_pjinex.jpg",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758733126/2_x4ikwf.webp",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758728011/3_injmvz.webp",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758728198/4_xrqj4x.webp",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758728554/5_dxq6pk.webp",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758728677/Look_5.2_jtp6bh.jpg",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758728798/Look_1.1_b5237v.jpg",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758728804/Look_8.2_hj4cja.jpg",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758728794/Look_2.1_wmoeob.jpg",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758729841/Look_4.1_pquwyr.jpg",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758729845/Look_10.1_q0cxqa.jpg",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758729849/Look_5.1_phihv3.jpg",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758729834/Look_13.2_qbwxgq.jpg",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758729840/Look_6.1_hgrb3k.jpg",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758729852/Look_8.1_ydxqsf.jpg",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758729854/Look_9.1_u6j3o7.jpg",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758729861/Look_11.2_cj7vo7.jpg",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758729855/Look_12.1_oaofal.jpg",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758729899/Look_13.1_icprlg.jpg",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758729863/Look_14_hbjzif.jpg",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758729869/Look_11.1_gnm7pi.jpg",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758729873/Look_16_t6uu6d.jpg",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758729869/Look_17_wko8eq.jpg",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758729871/Look_19_bej2l2.jpg",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758729887/Look_20_ci0gol.jpg",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758729882/Look_22_bmnmv7.jpg",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758729884/Look_26_ls5djy.jpg",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758729899/Look_12.2_kmfmsv.jpg",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758729828/Look_23_au9fyn.jpg",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758729835/Look_24_agh3pi.jpg",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758729837/Look_25_oqkp9s.jpg",
  ]
  images = [
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758735067/fallwinter5_rmesxj.webp',
      hoverUrl: 'https://placehold.co/800x1200?text=Hover+Preview',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733782/fallwinter3_kfb0ee.webp',
      hoverUrl: 'https://placehold.co/800x1200?text=Hover+Preview',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733779/fallwinter4_fsdty9.webp',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733788/Look_1.2_zhzwe1.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733798/Look_2.1_lbvjge.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733800/Look_2.2_wwyqzq.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733809/Look_3.1_f6usaw.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733811/Look_3.2_wwyqzq.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733800/Look_4.1_cyclai.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733802/Look_4.2_yz9nyi.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733818/Look_6.1_trwggm.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733820/Look_6.2_zzm4kq.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733814/Look_7.1_gijgos.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733816/Look_7.2_mtnjli.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733807/Look_10.2_kvqz2c.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733805/Look_10.1_q0cxqa.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733826/Look_12.2_kcmq9p.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733824/Look_12.1_oaofal.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733972/Look_13_o93hcp.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733974/Look_13.2_qbwxgq.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733788/Look_1.2_zhzwe1.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733778/fallwinter4_fsdty9.webp',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733824/Look_15_mdndyz.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733826/Look_15.2_hbjzif.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733836/Look_16_yz9nyi.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733838/Look_16_t6uu6d.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733838/Look_18_mtnjli.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733840/Look_18_wko8eq.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733776/Look_19_bagho6.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733774/Look_19_bej2l2.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733762/Look_20_mnriki.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733760/Look_20_ci0gol.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733778/Look_21_axtlfh.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733775/Look_21_bmnmv7.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733805/Look_22_izqgno.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733803/Look_22_ls5djy.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733860/Look_11.2_komkyy.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733858/Look_11.1_gnm7pi.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733814/Look_23_fxawbc.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733812/Look_23_au9fyn.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733775/Look_24_u3iecq.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733773/Look_24_agh3pi.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733778/Look_25_ypnyy6.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733776/Look_25_oqkp9s.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733799/Look_26_s20b8i.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733797/Look_26_ls5djy.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733788/Look_27_exa9vm.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733786/Look_27_kmfmsv.jpg',
    },
  ];
  images3 = [
    // 'assets/3C8A1513-scaled-1-1.jpg (1).webp',
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758737702/3C8A1469_rks4js.jpg",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758737704/3C8A1582_txslkf.jpg",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758737699/3C8A1513-scaled-1-1.jpg_abxyjv.webp",
    "https://res.cloudinary.com/dzit141xn/image/upload/v1758737705/3C8A1581_o2cews.jpg",
  ]
  moveNext(id: string) {
    this.route.navigate([id])
  }
}
