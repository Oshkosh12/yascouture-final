import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.html',
  styleUrls: ['./main-page.scss']
})
export class MainPage implements OnInit, OnDestroy {

  toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar?.classList.toggle('active');
  }

  ngOnInit() {
    window.addEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    if (window.innerWidth >= 800) {
      const sidebar = document.getElementById('sidebar');
      sidebar?.classList.remove('active');
    }
  };

  ngOnDestroy() {
    window.removeEventListener('resize', this.handleResize);
  }
}
