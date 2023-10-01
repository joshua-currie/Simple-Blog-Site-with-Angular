import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebTitleComponent } from './web-title.component';

describe('WebTitleComponent', () => {
  let component: WebTitleComponent;
  let fixture: ComponentFixture<WebTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebTitleComponent]
    });
    fixture = TestBed.createComponent(WebTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
