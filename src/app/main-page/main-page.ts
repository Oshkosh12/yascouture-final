import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import this

@Component({
  selector: 'app-main-page',
  standalone: true, // ⬅️ only needed if this is a standalone component
  imports: [CommonModule], // ✅ Add this
  templateUrl: './main-page.html',
  styleUrls: ['./main-page.scss']
})
export class MainPage {
  onClickHandler(arg0: string) {
    if (arg0 == "list1") {
      this.showHover = !this.showHover;
      this.showHover2 = false;
      this.showHover3 = false;
    }
    else if (arg0 == "list2") {
      this.showHover2 = !this.showHover2;
      this.showHover = false;
      this.showHover3 = false;
    }
    else if (arg0 == "list3") {
      this.showHover3 = !this.showHover3;
      this.showHover2 = false;
      this.showHover = false;
    }
  }
  showHover: boolean = false;
  showHover3: boolean = false;
  showHover2: boolean = false;
  run: boolean = false;

  ShowandHideDetails(id: any, isShow: boolean) {
    debugger
    if (isShow == false) {
      this.showHover = false;
      this.showHover2 = false;
      this.showHover3 = false;
    }
    if (id == "list1" && isShow) {
      this.showHover = true;
      this.showHover2 = false;
      this.showHover3 = false;
    }
    else if (id == "list2" && isShow) {
      this.showHover2 = true;
      this.showHover = false;
      this.showHover3 = false;
    }
    else if (id == "list3" && isShow) {
      this.showHover3 = true;
      this.showHover2 = false;
      this.showHover = false;
    }
  }
  ngOnInit() {

  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const pageHeight = document.documentElement.clientWidth;

    if (pageHeight > 800) {
      this.run = true;
    } else {
      this.run = false;
    }
  }
menuVisible: boolean = false;
toggleMenu() {
  this.menuVisible = !this.menuVisible;
}

}

