import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadserviceService {

  private apiUrl = 'http://localhost:4200/upload_table/download';

  constructor(private http: HttpClient) {}

  downloadPDF(id: number): Observable<Blob> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Blob>(`${this.apiUrl}/${id}`, {}, { headers: headers, responseType: 'blob' as 'json' });
  }
}
