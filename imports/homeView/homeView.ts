// Meteor

import { Meteor } from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

// Angular
import {Component} from 'angular2/core';
import {MeteorComponent} from 'angular2-meteor';
import {Router} from 'angular2/router';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';
import {MATERIAL_DIRECTIVES} from 'ng2-material/all';
import {RouterLink} from 'angular2/router';

// Admir


// Component

@Component({

  templateUrl: '/imports/homeView/homeView.html'
})
export class HomeView extends MeteorComponent {


  constructor() {
    super();


  }
}