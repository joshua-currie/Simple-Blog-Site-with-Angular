import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../app/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogs: any[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(data => {
      this.blogs = data.blogPosts;
    });
  }

}
