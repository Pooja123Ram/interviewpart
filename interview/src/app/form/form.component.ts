import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  employee: any = {}; // Object to store employee form data
  companyDetails: any = {}; // Object to store company details form data
  showCompanyDetailsForm = false; // Variable to control visibility of company details form

  constructor() {}

  onSubmit() {
    console.log('Employee form submitted:', this.employee);
    // Show the company details form after submitting the employee form
    this.showCompanyDetailsForm = true;
  }

  onCompanyDetailsSubmit() {
    console.log('Company details form submitted:', this.companyDetails);
    // You can add further logic here to handle the company details form submission
  }
}
