import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Meteor } from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

// Angular
import {Component, EventEmitter, OnInit, provide} from 'angular2/core';
import {MeteorComponent} from 'angular2-meteor';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {RouterLink} from 'angular2/router';
import {Router} from 'angular2/router';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router';

// Admir

import {HomeView} from '../imports/homeView/homeView';
import {DemoTab} from '../imports/tabs/demo';
import {DemoModal} from '../imports/modal/demo';

@Component({
  selector: 'app',
  templateUrl: 'client/app.html',
  directives: [ RouterLink, ROUTER_DIRECTIVES,  HomeView, DemoTab, DemoModal],
})
@RouteConfig([
  { path: '/', as: 'HomeView', component: HomeView },
  { path: '/tabs', as: 'Tabs', component: DemoTab },
    { path: '/modal', as: 'Modal', component: DemoModal },


])
class AdmirAngularComponents extends MeteorComponent  implements OnInit {

  constructor(private router: Router) {
    super();





  }

  ngOnInit() {


    this.activate();
    console.log("I'm being called when component is initalized after constructor method in BasicAngular2 in app.ts");
  }



  activate() {
    console.log("in activate()")



  }



}

bootstrap(AdmirAngularComponents, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);