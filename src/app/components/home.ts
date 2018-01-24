import {Component, ViewEncapsulation, OnDestroy} from '@angular/core';

@Component({
  selector: 'home',
  template: '<h1>Home Component</h1><div>This is content of the home page</div><br><br><br><br><br>',
  styleUrls: ['styles.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnDestroy {

  constructor(){
    console.log("HomeComponent getting constructed");
  }

  ngOnDestroy() {
    console.log("HomeComponent getting destroyed");
  }


}
