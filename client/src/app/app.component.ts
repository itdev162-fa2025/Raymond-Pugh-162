import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent implements OnInit {
  title = 'My Blog';
  posts: any = []; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:5022/api/posts').subscribe({
      next: (response) => (this.posts = response),
      error: (e) => console.error('Error fetching posts:', e),
      complete: () => console.log('Posts fetched successfully')
    });
  }
}
