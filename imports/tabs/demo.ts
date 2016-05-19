import 'reflect-metadata';

import { Meteor } from 'meteor/meteor';

// Angular
import {Component, EventEmitter, OnInit, Input} from 'angular2/core';
import {MeteorComponent} from 'angular2-meteor';



// Admir


import {TabView} from '../directives/tabs/tabview';
import {TabPanel} from '../directives/tabs/tabpanel';


@Component({
  selector: 'p-tabView',
  templateUrl: '/imports/tabs/demo.html',
    directives: [TabView, TabPanel]

})
export class DemoTab implements OnInit {

  constructor() {



  }

  ngOnInit() {

    // console.log(this._element.outerHTML)


    // console.dir(this.staffModelItem)

  }


}