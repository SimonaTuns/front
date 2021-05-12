import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarComponent} from './calendar/calendar.component';
import { AsStudentComponent } from './as-student/as-student.component';
import { AsTeacherComponent } from './as-teacher/as-teacher.component';
import { AsGuestComponent } from './as-guest/as-guest.component';


const routes: Routes = [
  
  {
    path: 'as-student', component: AsStudentComponent
  },
  {
    path:'as-teacher', component: AsTeacherComponent
  },
  {
    path: 'as-guest', component: AsGuestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [AsStudentComponent,AsGuestComponent,AsTeacherComponent]