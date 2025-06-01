import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper.html',
  styleUrls: ['./stepper.scss']
})
export class Stepper {
  monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  currentDate: Date = new Date();
  displayYear: number = this.currentDate.getFullYear();
  displayMonth: number = this.currentDate.getMonth();

  days: Array<{ date: number; inactive: boolean; isToday: boolean }> = [];

  currentStep: number = 1;  // Current step tracking

  constructor() {
    this.generateCalendar();
  }

  generateCalendar(): void {
    this.days = [];

    const firstDay = new Date(this.displayYear, this.displayMonth, 1).getDay();
    const daysInMonth = new Date(this.displayYear, this.displayMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(this.displayYear, this.displayMonth, 0).getDate();

    // Previous month's days
    for (let i = firstDay - 1; i >= 0; i--) {
      this.days.push({
        date: daysInPrevMonth - i,
        inactive: true,
        isToday: false
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      const isToday =
        i === this.currentDate.getDate() &&
        this.displayMonth === this.currentDate.getMonth() &&
        this.displayYear === this.currentDate.getFullYear();

      this.days.push({
        date: i,
        inactive: false,
        isToday: isToday
      });
    }

    // Fill remaining days to complete the grid (multiples of 7)
    while (this.days.length % 7 !== 0) {
      const nextDate = this.days.length - (firstDay + daysInMonth) + 1;
      this.days.push({
        date: nextDate,
        inactive: true,
        isToday: false
      });
    }
  }

  prevMonth(): void {
    if (this.displayMonth === 0) {
      this.displayMonth = 11;
      this.displayYear--;
    } else {
      this.displayMonth--;
    }
    this.generateCalendar();
  }

  nextMonth(): void {
    if (this.displayMonth === 11) {
      this.displayMonth = 0;
      this.displayYear++;
    } else {
      this.displayMonth++;
    }
    this.generateCalendar();
  }

  nextStep(): void {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }
}
