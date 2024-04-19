import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-boom',
  templateUrl: './boom.component.html',
  styleUrl: './boom.component.css'
})
export class BoomComponent {
  email = {
    to: '',
    from: '',
    subject: '',
    body: '',
  };
  attachment: File | null = null;

  constructor(private router: Router, private http: HttpClient) { }

  logout(): void {
    this.router.navigate(['/login']);
  };

  sendEmail() {
    const formData = new FormData();
    formData.append('to', this.email.to);
    formData.append('from', this.email.from);
    formData.append('subject', this.email.subject);
    formData.append('body', this.email.body);

    if (this.attachment) {
      formData.append('attachment', this.attachment);
    }

    this.http.post<any>('http://localhost:4200/selectedpeople-with-attachment', formData)
      .subscribe(
        () => {
          console.log('Email sent successfully');
          this.resetForm();
        },
        error => {
          console.error('Error sending email:', error);
        }
      );
      this.resetForm();

  }

  handleFileInput(event: any) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.files && inputElement.files.length > 0) {
      this.attachment = inputElement.files.item(0);
    }
  }

  resetForm() {
    this.email = { to: '', from: '', subject: '', body: '' };
    this.attachment = null;
    const attachmentInput = document.getElementById('attachment') as HTMLInputElement;
    if (attachmentInput) {
      attachmentInput.value = '';
    }
  }

  selectFile() {
    const fileInput = document.getElementById('attachment');
    if (fileInput) {
      fileInput.click(); 
    }
  }

}
