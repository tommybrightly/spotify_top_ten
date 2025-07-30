import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthService {

  private clientId = 'd4b8752877074280878b546b73b070d0';
  private redirectUri = 'http://127.0.0.1:4200/callback';
  private scopes = ['user-top-read'];

  getAuthUrl(): string {
    const base = 'https://accounts.spotify.com/authorize';
    return `${base}?client_id=${this.clientId}&response_type=token&redirect_uri=${encodeURIComponent(this.redirectUri)}&scope=${encodeURIComponent(this.scopes.join(' '))}`;
  }

  constructor() { }
}
