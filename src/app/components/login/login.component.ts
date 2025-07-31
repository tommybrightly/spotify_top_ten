import { Component } from '@angular/core';
import { SpotifyAuthService } from '../../services/spotify-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private spotifyAuth: SpotifyAuthService) {}

  login(): void {
    this.spotifyAuth.loginWithSpotify()
  }

}
