import { TasksComponent } from './pages/tasks/tasks.component';
import { ConfigComponent } from './pages/config/config.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

const routes: Routes = [
  {
    path: '', component: NavbarComponent,
    children: [
      { path: '', redirectTo: 'tasks', pathMatch: 'full' },
      { path: 'tasks', component: TasksComponent, title: 'Tarefas' },
      { path: 'calendar', component: CalendarComponent, title: 'Calendario' },
      { path: 'config', component: ConfigComponent, title: 'Configuração' },
    ]
  },
  { path: '**', redirectTo: 'tasks' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
