import {Component, OnDestroy} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div>
        <a [routerLink]="['/']">Home</a>
        <a [routerLink]="['/services']">Services</a><br><br>
      <router-outlet></router-outlet></div>
    `
})
export class AppComponent implements OnDestroy {

  constructor(){
    console.log("AppComponent getting constructed");
  }

  ngOnDestroy() {
    console.log("AppComponent getting destroyed");
  }


}
