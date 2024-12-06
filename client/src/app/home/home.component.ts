import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:5022/api/posts').subscribe({
      next: (response) => (this.posts = response),
      error: (e) => console.error(e),
      complete: () => console.log('Complete')
    });
  }
}
