import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  encapsulation: ViewEncapsulation.None,
  imports: [FormsModule]
})
export class SignupComponent {
  formData = {
    username: '',
    email: ''
  };

  constructor(private route: ActivatedRoute, private router: Router) {
    // Load data from URL into form
    this.route.queryParams.subscribe(params => {
      this.formData.username = params['username'] || '';
      this.formData.email = params['email'] || '';
    });
  }

  onSubmit() {
    // Update URL with form values using queryParams
    this.router.navigate([], {
      queryParams: {
        username: this.formData.username,
        email: this.formData.email
      }
    });

    alert(`Submitted via GET\nUsername: ${this.formData.username}\nEmail: ${this.formData.email}`);
  }
}
