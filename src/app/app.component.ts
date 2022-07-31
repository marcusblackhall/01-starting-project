import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AnalyticsService } from './shared/analytics.service';
import { WelcomeComponent } from './welcome/welcome.component';

@Component({
  standalone: true,
  imports:[WelcomeComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {}

