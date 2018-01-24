import {Component, ViewEncapsulation, OnDestroy} from '@angular/core';

@Component({
  selector: 'services',
  template: `<h1>Services Component</h1><div>
    This is content of the services.<br><br><br><br><br></div>`,
  styleUrls: ['styles.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServicesComponent implements OnDestroy {

  constructor(){
    console.log("ServicesComponent getting constructed");
  }

  ngOnDestroy() {
    console.log("ServicesComponent getting destroyed");
  }


}
