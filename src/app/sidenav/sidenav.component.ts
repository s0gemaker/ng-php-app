import { fadeInAnimaiton } from './../animations';
import { MediaQueryService } from './../media-query.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [fadeInAnimaiton]
})
export class SidenavComponent implements OnInit {

  state_open: boolean = false;
  isOpen$: Observable<boolean>;

  constructor(private MediaQueryService: MediaQueryService) { }

  ngOnInit(): void {
    this.isOpen$ = this.MediaQueryService.drawwerObservable$.pipe(tap(() => {
      this.state_open = !this.state_open;
    }));
  }
  getPage(outlet:RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];

  }

}
