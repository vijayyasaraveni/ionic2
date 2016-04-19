import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the AddVehiclePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/add-vehicle/add-vehicle.html',
})
export class AddVehiclePage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}
