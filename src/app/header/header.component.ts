import { MediaQueryService } from './../media-query.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMobile$: Observable<MediaQueryList>;

  constructor(private mediaQueryService: MediaQueryService) { }

  ngOnInit(): void {
    this.isMobile$ = this.mediaQueryService.mediaObservable$;
  }

  toggleMobileMenu() {
    this.mediaQueryService.drawerSubject$.next(true);
  }

}
