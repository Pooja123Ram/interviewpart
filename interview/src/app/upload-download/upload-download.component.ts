// Inside src/app/upload-download/upload-download.component.ts

import { Component } from '@angular/core';
import { DataServiceService } from '../data.service.service';// Adjust the import path based on your actual file structure
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-upload-download',
  templateUrl: './upload-download.component.html',
  styleUrls: ['./upload-download.component.css']
})
export class UploadDownloadComponent {

  fileToUpload: any;
id!: string;

  constructor(private dataService: DataServiceService) { }

  handleFileInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files;
    if (files && files.length > 0) { // Add null check here
      this.fileToUpload = files.item(0);
      console.log('Selected file:', this.fileToUpload);
    } else {
      // Handle case when no file is selected
      console.warn('No file selected');
    }
  }

  uploadFile(): void {
    if (this.fileToUpload) {
      this.dataService.uploadFile(this.fileToUpload).subscribe(
        () => {
          console.log('File uploaded successfully');
          // Optionally, you can fetch the uploaded file details from the server and update fileToUpload properties here
        },
        (error) => console.error('Error uploading file:', error)
      );
    } else {
      console.warn('No file selected'); // Handle case when no file is selected during upload
    }
  }
  downloadFile(id: any): void {
    if (this.fileToUpload && id) {
        console.log(this.fileToUpload);
        const fileId = this.fileToUpload.name; // Assuming fileId is the name of the file

        // Assuming downloadFile API returns the file content as a Blob or ArrayBuffer
        this.dataService.downloadFile(fileId).subscribe(
            (response) => {
                if (response instanceof Blob) {
                    const blob = new Blob([response], { type: 'application/octet-stream' });
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = this.fileToUpload!.name || 'file'; // Set the downloaded file's name
                    document.body.appendChild(a);
                    a.click();
                    window.URL.revokeObjectURL(url);
                    document.body.removeChild(a);
                } else {
                    console.error('Invalid response format. Expected Blob or ArrayBuffer.');
                }
            },
            (error) => console.error('Error downloading file:', error)
        );
    } else {
        console.warn('No file selected'); // Handle case when no file or id is selected during download
    }
}

// onDownload() {
//   // Make a GET request to your backend API endpoint that serves the file
//   this.http.get('http://localhohttps://3be4f5a8-8b51-4a30-b49c-35135157b63a.mock.pstmn.io/fileupload', { responseType: 'blob' })
//     .subscribe((data: Blob) => {
//       const blob = new Blob([data], { type: 'application/pdf' });
//       const url = window.URL.createObjectURL(blob);
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = 'filename.pdf'; // Specify the filename for the downloaded file
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);
//       window.URL.revokeObjectURL(url);
//     }, error => {
//       console.error('Error downloading file:', error);
//       // Handle error, show error message, etc.
//     });
// }
}
