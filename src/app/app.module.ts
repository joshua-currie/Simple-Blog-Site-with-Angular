import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarLinkComponent } from './navbar-link/navbar-link.component';
import { WebTitleComponent } from './web-title/web-title.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { LinksComponent } from './links/links.component';
import { BlogComponent } from './blog/blog.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogTitleComponent } from './blog-title/blog-title.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarLinkComponent,
    WebTitleComponent,
    FooterComponent,
    AboutComponent,
    LinksComponent,
    BlogComponent,
    BlogsComponent,
    BlogTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
