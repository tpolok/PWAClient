import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule } from 'angular-calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { ConnectionComponent } from './connection/connection.component';
import { RegisterComponent } from './register/register.component';
import { ConnectedComponent } from './connected/connected.component';
import { AppRoutingModule } from './/app-routing.module';
import { CommonService } from './service/common.service';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    RegisterComponent,
    ConnectedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PdfViewerModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    CommonModule,
    HttpClientModule,
    CalendarModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

