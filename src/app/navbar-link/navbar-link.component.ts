import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar-link',
  templateUrl: './navbar-link.component.html',
  styleUrls: ['./navbar-link.component.css']
})
export class NavbarLinkComponent {
  @Input() navLinkInfo : string | undefined;

  @ViewChild('blogs-location', { static: false }) blogsLocation: ElementRef | undefined;

  scrollTo(info: string | undefined): void {
    if (info == "Blogs")
    {
      const yOffset = 300;
      window.scrollTo({
        top: yOffset,
        behavior: 'smooth'
      })
    }

    else if (info == "About")
    {
      const yOffset = 3700;
      window.scrollTo({
        top: yOffset,
        behavior: 'smooth'
      })
    }

    else if (info == "Links")
    {
      const yOffset = 4000;
      window.scrollTo({
        top: yOffset,
        behavior: 'smooth'
      })
    }
  }
}
