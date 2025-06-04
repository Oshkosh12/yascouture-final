
import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-sidebarone',
  imports: [],
  templateUrl: './sidebarone.html',
  styleUrl: './sidebarone.scss'
})
export class Sidebarone {
  @Output() close = new EventEmitter<void>();
}
