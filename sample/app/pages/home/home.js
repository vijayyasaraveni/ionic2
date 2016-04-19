import {Page, NavController, NavParams} from 'ionic-angular';
import {CreateTripPage} from '../create-trip/create-trip';
import {AboutPage} from '../about/about';
@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  
  static get parameters(){
    return [[NavController]];
  }
  
  constructor(nav) {
    this.nav = nav;
  }
  
  create(){
    
    alert("i am here");
    console.log(this.nav)
    this.nav.push(CreateTripPage);
  }
  
  
}
