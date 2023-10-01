import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private apiUrl = 'assets/blogs.json'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
