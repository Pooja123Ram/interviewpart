import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule




@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  selectedFile: File | null = null;

  constructor(private http: HttpClient) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      this.http.post('http://localhost:4200/upload_table', formData)
        .subscribe(response => {
          console.log('File uploaded successfully:', response);
          // You can handle the response as needed, such as showing a success message to the user
        }, error => {
          console.error('Error uploading file:', error);
          // Handle error cases, show error message to the user, etc.
        });
    } else {
      console.error('No file selected.');
      // Show a message to the user indicating that no file was selected
    }
  }

}
