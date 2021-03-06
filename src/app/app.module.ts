import 'flatpickr/dist/flatpickr.css';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './calendar/calendar.component';
import { HttpClientModule } from "@angular/common/http";
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MatSliderModule } from '@angular/material/slider';
import {MatDialogModule} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { AsAdminComponent } from './as-admin/as-admin.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { EditComponent } from './edit/edit.component';
import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.css';
import { MatTabsModule } from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';

//import { NgbModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    routingComponents,
    AsAdminComponent,
   NewCourseComponent,
   EditComponent,
   // DialogComponent
  ],
  imports: [
    MatSliderModule,
    MatDialogModule,
    CommonModule,
    FormsModule,
    MatMenuModule,
    RouterModule,
    NgbModalModule,
    BrowserModule,
    MatTabsModule,
    FlatpickrModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { 
  
}
