import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css',
})
export class LogoutComponent {
  username: string = '';

  constructor(private authService: AuthService) {}

  onLogout() {
    if (this.username) {
      this.authService.logoutUser(this.username);
    }
  }
}
