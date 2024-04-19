import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProgressComponent } from './progress/progress.component';
import { UploadComponent } from './upload/upload.component'; // Adjust the path as needed
import { DownloadComponent } from './download/download.component';
import { UploadDownloadComponent } from './upload-download/upload-download.component';
import { UploadmultipleComponent } from './uploadmultiple/uploadmultiple.component';
import { BoomComponent } from './boom/boom.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  
  {path:'upload',component:UploadComponent},
  {path:'download',component:DownloadComponent},
  {path:'upload_download',component:UploadDownloadComponent},
       {path:'boom',component:BoomComponent},
       {path:'form',component:FormComponent},





  
];  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
