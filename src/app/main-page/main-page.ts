import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener,
  OnInit,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { Video } from "../video/video";

declare var Weglot: any;

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, Video],
  templateUrl: './main-page.html',
  styleUrls: ['./main-page.scss'],
})
export class MainPage implements AfterViewInit, OnInit {
  @ViewChild('myVideo', { static: false }) myVideo!: ElementRef<HTMLVideoElement>;
  @Input() videoElement: string =
    "https://res.cloudinary.com/dzit141xn/video/upload/v1758726273/Teaser_1_FC_nzlxpd.mp4";

  constructor(private router: Router) {}

  sidebarOneOpen = false;
  sidebarTwoOpen = false;
  showHover = false;
  showHover2 = false;
  divshow1 = false;
  divshow2 = false;
  divshow3 = false;
  showHover3 = false;
  run = false;
  menuVisible = false;

  selectedLanguage: 'en' | 'ar' = 'en';
  languageDropdownOpen = false;

  currentRoute: string = '';

  languages = {
    en: {
      label: 'English',
      flag: 'https://res.cloudinary.com/dzit141xn/image/upload/v1758727925/Flag_of_the_United_States__DoS_ECA_Color_Standard.svg_jwuqld.png',
    },
    ar: {
      label: 'للعربية',
      flag: 'assets/download.jpeg',
    },
  };

  ngOnInit() {
    let pageWidth = document.documentElement.clientWidth;
    this.run = pageWidth > 800;

    // ✅ Route change listener
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
        // console.log("Current Route:", this.currentRoute);
      }
    });
  }

  @HostListener('window:resize')
  onResize() {
    let pageWidth = document.documentElement.clientWidth;
    this.run = pageWidth > 800;
  }

  ngAfterViewInit(): void {
    // ✅ video autoplay setup
    if (this.myVideo) {
      const video = this.myVideo.nativeElement;
      video.muted = true;
      video.autoplay = true;
      video.loop = true;
      video.playsInline = true;
      video.load();
      video.play().catch(() => {});
    }

    // ✅ wait for Weglot to load properly
    setTimeout(() => {
      if (typeof Weglot !== 'undefined') {
        const currentLang = Weglot?.getCurrentLang?.() || 'en';
        Weglot.switchTo(currentLang);
        document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
        this.selectedLanguage = currentLang;

        if (Weglot.refresh) {
          Weglot.refresh();
        }
      }
    }, 1500);

    // ✅ language change listener
    if (typeof Weglot !== 'undefined' && Weglot.on) {
      Weglot.on('languageChanged', (newLang: string) => {
        if (newLang === 'en' || newLang === 'ar') {
          this.selectedLanguage = newLang;
          document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
        }
        this.languageDropdownOpen = false;
      });
    }
  }

  // sidebars
  openSidebarOne() {
    this.sidebarOneOpen = true;
    this.sidebarTwoOpen = false;
  }
  closeSidebarOne() {
    this.sidebarOneOpen = false;
  }
  openSidebarTwo() {
    this.sidebarTwoOpen = true;
    this.sidebarOneOpen = false;
  }
  closeSidebarTwo() {
    this.sidebarTwoOpen = false;
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
  closeMenu() {
    this.menuVisible = false;
  }

  onClickHandler(id: string) {
    this.showHover = id === 'list1' ? !this.showHover : false;
    this.showHover2 = id === 'list2' ? !this.showHover2 : false;
    this.showHover3 = id === 'list3' ? !this.showHover3 : false;
  }

  ShowandHideDetails(id: string, isShow: boolean) {
    if (!isShow) {
      this.showHover = this.showHover2 = this.showHover3 = false;
    } else {
      this.showHover = id === 'list1';
      this.showHover2 = id === 'list2';
      this.showHover3 = id === 'list3';
    }
  }

  moveNext(id: string) {
    this.router.navigate([id]);
  }

  switchLanguage(lang: 'en' | 'ar') {
    if (typeof Weglot !== 'undefined' && typeof Weglot.switchTo === 'function') {
      Weglot.switchTo(lang);
      document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
      this.setLanguage(lang);

      if (Weglot.refresh) {
        setTimeout(() => Weglot.refresh(), 500);
      }
    } else {
      console.error('Weglot is not ready yet.');
    }
  }

  setLanguage(lang: 'en' | 'ar') {
    this.selectedLanguage = lang;
    this.languageDropdownOpen = false;
  }

  get alternateLanguage(): 'en' | 'ar' {
    return this.selectedLanguage === 'en' ? 'ar' : 'en';
  }
}
