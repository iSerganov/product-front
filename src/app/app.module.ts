import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule, MatDividerModule, MatButtonModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { API_BASE_URL } from 'src/shared/api-services/services';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,

    }),
    MatDividerModule
  ],
  providers: [
    { provide: API_BASE_URL, useValue: 'http://localhost:2006' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
