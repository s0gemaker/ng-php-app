import { Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout'
import { MediaQueryService } from './media-query.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-php-app';

  mobileQuery: MediaQueryList;

  constructor(media: MediaMatcher, private mediaQueryService: MediaQueryService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mediaQueryService.mediaSubject$.next(this.mobileQuery);

  }
}
