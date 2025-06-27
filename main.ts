import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { SignupComponent } from './app/signup/signup.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', redirectTo: 'signup', pathMatch: 'full' },
      { path: 'signup', component: SignupComponent },
    ]),
  ],
});
