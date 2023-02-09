import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconDarkLightComponent } from './components/icon-dark-light/icon-dark-light.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ConfigComponent } from './pages/config/config.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { IconComponent } from './components/Icons/icons-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    IconDarkLightComponent,
    IconComponent,
    NavbarComponent,
    TasksComponent,
    ConfigComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
