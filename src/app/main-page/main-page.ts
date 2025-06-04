import { Component, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

declare var Weglot: any; // Declare Weglot global

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-page.html',
  styleUrls: ['./main-page.scss']
})
export class MainPage implements AfterViewInit {
  @ViewChild('myVideo') myVideo!: ElementRef<HTMLVideoElement>;

  constructor(private route: Router) { }

  ngAfterViewInit() {
    debugger
    // Setup video playback
    const video = this.myVideo.nativeElement;
    video.muted = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;
    video.load();
    video.play().catch(() => { /* Autoplay blocked fallback */ });

    // Sync selectedLanguage with Weglot current language
    if (Weglot && typeof Weglot.getCurrentLang === 'function') {
      this.selectedLanguage = Weglot.getCurrentLang();
    }

    // Listen for language change events from Weglot to update UI state
    if (Weglot && Weglot.on) {
      Weglot.on('languageChanged', (newLang: string) => {
        if (newLang === 'en' || newLang === 'ar') {
          this.selectedLanguage = newLang;
        }
        this.languageDropdownOpen = false; // optional: close dropdown after language change
      });
    }



  }

  ngOnInit() {
    let pageWidth = document.documentElement.clientWidth;
    this.run = pageWidth > 800;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    let pageWidth = document.documentElement.clientWidth;
    this.run = pageWidth > 800;
  }

  // Sidebar state
  sidebarOneOpen = false;
  sidebarTwoOpen = false;

  showHover = false;
  showHover2 = false;
  showHover3 = false;
  run = false;
  menuVisible = false;

  selectedLanguage: 'en' | 'ar' = 'en';
  languageDropdownOpen = false;

  languages = {
    en: { label: 'en', flag: 'assets/america.png' },
    ar: { label: 'ar', flag: 'assets/dubai.png' },
  };

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
  switchLanguage1(lang: string) {
    debugger
    Weglot.switchTo(lang);
  }
  switchLanguage(lang: 'en' | 'ar') {
    debugger
    if (Weglot && typeof Weglot.switchTo === 'function') {
      Weglot.switchTo(lang);
      this.setLanguage(lang); // update component state to keep UI in sync
    } else {
      console.error('Weglot is not ready yet.');
    }
  }

  get alternateLanguage(): 'en' | 'ar' {
    return this.selectedLanguage === 'en' ? 'ar' : 'en';
  }

  setLanguage(lang: 'en' | 'ar') {
    this.selectedLanguage = lang;
    this.languageDropdownOpen = false;
  }
}
