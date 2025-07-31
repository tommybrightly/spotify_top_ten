import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-callback',
  standalone: true,
  imports: [],
  templateUrl: './callback.component.html',
  styleUrl: './callback.component.css'
})
export class CallbackComponent {
  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];
      const codeVerifier = localStorage.getItem('spotify_code_verifier');

      if (code && codeVerifier) {
        const body = new HttpParams()
          .set('client_id', 'YOUR_SPOTIFY_CLIENT_ID')
          .set('grant_type', 'authorization_code')
          .set('code', code)
          .set('redirect_uri', 'http://127.0.0.1:4200/callback')
          .set('code_verifier', codeVerifier);

        this.http.post<any>('https://accounts.spotify.com/api/token', body.toString(), {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).subscribe(res => {
          localStorage.setItem('spotify_token', res.access_token);
          this.router.navigate(['/dashboard']);
        });
      }
    });
  }
}

