import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MediaQueryService {
  mediaSubject$ = new BehaviorSubject<MediaQueryList>(null);
  mediaObservable$ = this.mediaSubject$.asObservable();

  drawerSubject$ = new Subject<boolean>();
  drawwerObservable$ = this.drawerSubject$.asObservable();

  constructor() { }
}
