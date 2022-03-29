import { Injectable } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  isMobile = false;
  isOpenedMenu = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakPointsObserver();
  }

  breakPointsObserver() {
    // Utilizado 992px para seguir tamanho lg do ion-grid
    this.breakpointObserver
      .observe(['(min-width: 992px)'])
      .pipe(delay(1))
      .subscribe((res) => {
        if (res.matches) {
          this.isMobile = false;
        } else {
          this.isMobile = true;
        }
      });
  }

  toggleMenu() {
    this.isOpenedMenu = !this.isOpenedMenu;
  }
}
