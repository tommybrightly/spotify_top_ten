import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  topTracks: any[] = [];

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('spotify_token');
    if (!token) return;
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    this.http.get<any>('https://api.spotify.com/v1/me/top/tracks?limit=10', { headers })
    .subscribe(Response => {
      this.topTracks = Response.items;
      console.log(this.topTracks.map(t => ({ name: t.name, preview: t.preview_url })));

    })
  }

  logout(): void {
  localStorage.removeItem('spotify_token');
  localStorage.removeItem('spotify_code_verifier');
  this.router.navigate(['/login']);
  }

}
