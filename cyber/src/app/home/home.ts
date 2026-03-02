import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {

  images = [
    'assets/slide1.jpg',
    'assets/slide2.jpg',
    'assets/slide3.jpg'
  ];

  currentIndex = 0;

  next() {
    this.currentIndex =
      (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) %
      this.images.length;
  }
}