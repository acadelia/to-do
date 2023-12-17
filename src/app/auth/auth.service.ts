import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  private async hashPassword(password: string): Promise<string> {
    const msgBuffer = new TextEncoder().encode(password);

    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
    return hashHex;
  }

  public async registerUser(username: string, password: string): Promise<void> {
    const hashedPassword = await this.hashPassword(password);
    localStorage.setItem(
      `user_${username}`,
      JSON.stringify({ username, hashedPassword })
    );
  }

  public async loginUser(username: string, password: string): Promise<boolean> {
    const userData = localStorage.getItem(`user_${username}`);
    if (!userData) {
      console.log("user doesn't exist");
      return false;
    }

    const user = JSON.parse(userData);
    const hashedPassword = await this.hashPassword(password);
    return user.hashedPassword === hashedPassword;
  }

  public logoutUser(username: string) {
    localStorage.removeItem(`user_${username}`);
  }
}
