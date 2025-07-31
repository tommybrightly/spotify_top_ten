import { Injectable } from '@angular/core';
import { PkceService } from './pkce.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthService {

  private clientId = 'd4b8752877074280878b546b73b070d0';
  private redirectUri = 'http://127.0.0.1:4200/callback';
  private scopes = ['user-top-read', 'user-read-email', 'user-read-private'];
  
  constructor(private pkce: PkceService) {}

  async loginWithSpotify(): Promise<void> {
    const codeVerifier = this.pkce.generateCodeVerifier();
    const codeChallenge = await this.pkce.generateCodeChallenge(codeVerifier);

    // store verifier for later use
    localStorage.setItem('spotify_code_verifier', codeVerifier);

    const params = new URLSearchParams({
      client_id: this.clientId,
      response_type: 'code',
      redirect_uri: this.redirectUri,
      scope: this.scopes.join(' '),
      code_challenge_method: 'S256',
      code_challenge: codeChallenge
    });

    window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;

  }

}
