import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProgressComponent } from './progress/progress.component';
import { UploadComponent } from './upload/upload.component';
import { HttpClientModule } from '@angular/common/http';
import { UploadDownloadComponent } from './upload-download/upload-download.component';
import { UploadmultipleComponent } from './uploadmultiple/uploadmultiple.component';
import { BoomComponent } from './boom/boom.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
   
    ProgressComponent,
    UploadComponent,
    UploadDownloadComponent,
    UploadmultipleComponent,
    BoomComponent,
    FormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
