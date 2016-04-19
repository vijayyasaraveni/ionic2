import {Page, NavController} from 'ionic-angular';

import {AddVehiclePage} from '../add-vehicle/add-vehicle'

/*
  Generated class for the VehicleListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/vehicle-list/vehicle-list.html',
})
export class VehicleListPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
  
  addNewVehicle(){
    this.nav.push(AddVehiclePage);
  }
  
  
}
