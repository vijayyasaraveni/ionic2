import {Page, NavController} from 'ionic-angular';

import {VehicleListPage} from '../vehicle-list/vehicle-list';

/*
  Generated class for the CreateTripPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/create-trip/create-trip.html',
})
export class CreateTripPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
  
  nextButtonClick(){
    this.nav.push(VehicleListPage);
  }
  
}
