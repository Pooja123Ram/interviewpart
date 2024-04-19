import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeEmail: string = '';
  leaveType: string = '';
  leaveReason: string = '';

  constructor(private http: HttpClient) {}

  submitForm() {
    // Perform email verification before submitting the form
    this.verifyEmail(this.employeeEmail).subscribe((result: any) => {
      if (result.valid) {
        // Email is valid, proceed to submit leave application
        this.submitLeaveApplication();
      } else {
        alert('Invalid email address. Please provide a valid email.');
      }
    });
  }

  verifyEmail(email: string) {
    const apiUrl = 'http://localhost:3000/verifyEmail'; // Backend API endpoint
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

    return this.http.post(apiUrl, { email, apiKey });
  }

  submitLeaveApplication() {
    const apiUrl = 'http://localhost:3000/sendLeaveApplication'; // Backend API endpoint

    this.http.post(apiUrl, {
      employeeEmail: this.employeeEmail,
      leaveType: this.leaveType,
      leaveReason: this.leaveReason
    }).subscribe(response => {
      console.log('Leave application submitted successfully:', response);
      alert('Leave application submitted successfully!');
      // Optionally, you can show a success message to the user
    }, error => {
      console.error('Error submitting leave application:', error);
      alert('Error submitting leave application. Please try again.');
      // Handle error and show appropriate message to the user
    });
  }
}

