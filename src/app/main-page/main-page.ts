import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

declare var Weglot: any;

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-page.html',
  styleUrls: ['./main-page.scss'],
})
export class MainPage implements AfterViewInit, OnInit {
  @ViewChild('myVideo') myVideo!: ElementRef<HTMLVideoElement>;

  constructor(private route: Router) {}

  sidebarOneOpen = false;
  sidebarTwoOpen = false;
  showHover = false;
  showHover2 = false;
  divshow1 =false;
  divshow2 = false;
  divshow3 =false;
  showHover3 = false;
  run = false;
  menuVisible = false;

  selectedLanguage: 'en' | 'ar' = 'en';
  languageDropdownOpen = false;

  languages = {
    en: {
      label: 'English',
      flag: 'assets/Flag_of_the_United_States_(DoS_ECA_Color_Standard).svg.png',
    },
    ar: {
      label: 'للعربية',
      flag: 'assets/Flag_of_the_United_Arab_Emirates.svg.png',
    },
  };

  ngOnInit() {
    let pageWidth = document.documentElement.clientWidth;
    this.run = pageWidth > 800;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    let pageWidth = document.documentElement.clientWidth;
    this.run = pageWidth > 800;
  }

  ngAfterViewInit(): void {
    const video = this.myVideo.nativeElement;
    video.muted = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;
    video.load();
    video.play().catch(() => {});

    // ✅ Reapply the current language
    setTimeout(() => {
      const currentLang = Weglot.getCurrentLang?.() || 'en';
      Weglot.switchTo(currentLang);
      document.documentElement.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
      this.selectedLanguage = currentLang;
    }, 500);

    // ✅ Listen for language change and update local state
    if (Weglot && Weglot.on) {
      Weglot.on('languageChanged', (newLang: string) => {
        if (newLang === 'en' || newLang === 'ar') {
          this.selectedLanguage = newLang;
          document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
        }
        this.languageDropdownOpen = false;
      });
    }
  }

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
    this.route.navigate([id]);
  }

  switchLanguage(lang: 'en' | 'ar') {
    if (Weglot && typeof Weglot.switchTo === 'function') {
      Weglot.switchTo(lang);
      document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
      this.setLanguage(lang);
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
