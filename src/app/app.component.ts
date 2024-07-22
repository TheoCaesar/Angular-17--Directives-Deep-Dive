import { Component, inject, computed } from '@angular/core';

import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { NgIf } from '@angular/common';
import { AuthDirective } from './auth/auth.directive';
import { LogDirective } from './log.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AuthDirective, LogDirective, AuthComponent, LearningResourcesComponent, NgIf, ],
})
export class AppComponent {
}
