import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  topTracks: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const token = localStorage.getItem('spotify_token');
    if (!token) return;
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    this.http.get<any>('https://api.spotify.com/v1/me/top/tracks?limit=10', { headers })
    .subscribe(Response => {
      this.topTracks = Response.items;
      console.log(this.topTracks[0])
    })
  }

  currentPreview: HTMLAudioElement | null = null;

  playPreview(url: string): void {
    if (this.currentPreview) {
      this.currentPreview.pause();
      this.currentPreview = null;
    }
    
    if (url) {
      const audio = new Audio(url);
      audio.play();
      this.currentPreview = audio;
    }
    
  }

  stopPreview(): void {
    if (this.currentPreview) {
      this.currentPreview.pause();
      this.currentPreview = null;
    }
  }
}
