import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPage } from "../main-page/main-page";
import { Footer } from "../footer/footer";

interface Step1Category {
  title: string;
  selected: boolean;
  defaultDescription: string;
  selectedDescription: string;
  phone: string;
}
interface AppointmentType {
  name: string;
  label: string;
  description: string;
  selected: boolean;
}

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [CommonModule, FormsModule, MainPage, Footer],
  templateUrl: './stepper.html',
  styleUrls: ['./stepper.scss']
})
export class Stepper {
  // Calendar data
  monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  currentDate: Date = new Date();
  displayYear: number = this.currentDate.getFullYear();
  displayMonth: number = this.currentDate.getMonth();
  days: Array<{ date: number; inactive: boolean; isToday: boolean }> = [];

  // Step state
  currentStep: number = 1;

  inboutique: boolean = false;
  // Step 1: Appointment Types
  appointmentTypes: AppointmentType[] = [
    {
      name: 'online',
      label: 'ONLINE',
      description: 'BOOK AN ONLINE APPOINTMENT',
      selected: true
    },
    {
      name: 'in-boutique',
      label: 'IN BOUTIQUE',
      description: 'BOOK AN IN- BOUTIQUE APPOINTMENT',
      selected: false
    }
  ];

  // Step 1: Categories
  categories: Step1Category[] = [
    {
      title: 'Haute Couture',
      selected: false,
      defaultDescription: 'This is the process to find your perfect haute couture gown, created just for you.',
      selectedDescription: `Yas Couture

Yas Couture is located in heart of Kuwait, in Jabriya, since 2003. It is a place where you can get amazing haute couture dresses, evening Gowns, and gorgeous wedding dresses.
`,
      phone: '+96525325522'
    },
    {
      title: 'Bridal Dress',
      selected: false,
      defaultDescription: 'This is the process to find the bridal dress of your dreams, designed to reflect your vision.',
      selectedDescription: `Yas Couture

Yas Couture is located in heart of Kuwait, in Jabriya, since 2003. It is a place where you can get amazing haute couture dresses, evening Gowns, and gorgeous wedding dresses.
`,
      phone: '+96525325522'
    },
    {
      title: 'Ready to Wear',
      selected: false,
      defaultDescription: 'This is the process to find your ideal ready-to-wear dress, effortlessly chic and elegant.',
      selectedDescription: `Yas Couture

Yas Couture is located in heart of Kuwait, in Jabriya, since 2003. It is a place where you can get amazing haute couture dresses, evening Gowns, and gorgeous wedding dresses.`,
      phone: '+96525325522'

    }
  ];


  // Step 2: User details
  userDetails = {
    name: '',
    lastName: '',
    email: '',
    countryCode: '+91',
    phone: ''
  };

  // Step 3: Selected date
  selectedDate: { year: number; month: number; date: number } | null = null;

  constructor() {
    this.generateCalendar();
  }

  // CALENDAR
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

  selectAppointmentType(type: AppointmentType): void {
    debugger
    if (type.name == "in-boutique") {
      this.inboutique = true;
    }
    else {
      this.inboutique = false;
    }
    this.appointmentTypes.forEach(t => t.selected = false);
    type.selected = true;
  }

  selectCategory(index: number) {
    debugger
    this.categories.forEach((cat, i) => cat.selected = i === index ? !cat.selected : false);
  }
  // CALENDAR SELECTION
  selectDate(day: { date: number; inactive: boolean; isToday: boolean }): void {
    if (day.inactive) return;
    this.selectedDate = {
      year: this.displayYear,
      month: this.displayMonth,
      date: day.date
    };
  }

  // STEP CONTROL
  nextStep(): void {
    if (this.currentStep === 1) {
      // Validate step 1
      if (!this.appointmentTypes.some(t => t.selected)) {
        alert('Please select an appointment type.');
        return;
      }
      if (!this.categories.some(c => c.selected)) {
        alert('Please select a category.');
        return;
      }
    }
    if (this.currentStep === 2) {
      // Validate step 2
      if (!this.userDetails.name || !this.userDetails.lastName || !this.userDetails.email || !this.userDetails.phone) {
        alert('Please fill all personal details.');
        return;
      }
      // Optionally: add email & phone validation here
    }
    if (this.currentStep === 3) {
      // Validate step 3
      if (!this.selectedDate) {
        alert('Please select a date.');
        return;
      }
      // Submit logic here
      alert('Appointment booked successfully!\n' +
        `Type: ${this.appointmentTypes.find(t => t.selected)?.label}\n` +
        `Category: ${this.categories.find(c => c.selected)?.title}\n` +
        `Name: ${this.userDetails.name} ${this.userDetails.lastName}\n` +
        `Email: ${this.userDetails.email}\n` +
        `Phone: ${this.userDetails.countryCode} ${this.userDetails.phone}\n` +
        `Date: ${this.selectedDate.date} ${this.monthNames[this.selectedDate.month]} ${this.selectedDate.year}`);
      return;
    }
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  prevStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
  userDetails2 = {
    countryCode: '+1',
    phone: ''
  };

  countries = [
    { code: '+1', flag: 'assets/Flag_of_the_United_Arab_Emirates.svg.png' },
    { code: '+44', flag: 'assets/Flag_of_the_United_Arab_Emirates.svg.png' },
    { code: '+91', flag: 'assets/Flag_of_the_United_Arab_Emirates.svgp.ng' },
    { code: '+61', flag: 'assets/Flag_of_the_United_Arab_Emirates.svg.png' },
    { code: '+971', flag: 'assets/Flag_of_the_United_Arab_Emirates.svg.png' }
  ];
  dropdownOpen = false;
  selectedCountry = this.countries[0];

  selectCountry(country: any) {
    this.selectedCountry = country;
    this.userDetails2.countryCode = country.code;
    this.dropdownOpen = false;
  }

}