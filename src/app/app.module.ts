import {NgModule, ViewEncapsulation}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './components/app.component';
import {HomeComponent} from "./components/home";
import {ServicesComponent} from "./components/services";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'services', component: ServicesComponent}
];

const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [BrowserModule, routing],
  declarations: [AppComponent, HomeComponent, ServicesComponent],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}

