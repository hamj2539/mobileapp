import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExtendedDeviceInformation } from '@ionic-native/extended-device-information';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
  memory:any;
  cpu:any;
  freestorage:any;
  totalstorage:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private ex: ExtendedDeviceInformation) {
    this.memory = this.ex.memory;
    this.cpu = this.ex.cpumhz;
    this.totalstorage = this.ex.totalstorage;
    this.freestorage = this.ex.freestorage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }
}
