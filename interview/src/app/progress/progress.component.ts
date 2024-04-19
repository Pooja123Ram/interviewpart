import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.css'
})
export class ProgressComponent {
  progressValue: number = 0;

  constructor() { }

  // Function to increase progress value
  increaseProgress() {
    if (this.progressValue < 100) {
      this.progressValue = 25;
    }
  }

  // Function to decrease progress value
  decreaseProgress() {
    if (this.progressValue > 0) {
      this.progressValue = 50;
    }
  }

  // Function to reset progress value
  resetProgress() {
    this.progressValue = 75;
  }

  // Function to set custom progress value
  setCustomProgress(value: number) {
    this.progressValue = value;
  }

}
