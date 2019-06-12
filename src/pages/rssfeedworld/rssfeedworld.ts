import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RssfeedapiProvider } from '../../providers/rssfeedapi/rssfeedapi';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the RssfeedworldPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rssfeedworld',
  templateUrl: 'rssfeedworld.html',
})
export class RssfeedworldPage {
  rssData: any = [];
  link:string;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public rssfeed: RssfeedapiProvider, 
    public inappbrowser: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RssfeedPage');
    this.GetDataRss();
  }


  GetDataRss() {
    this.rssfeed.GetRssWorld().subscribe(
      data => {
        this.rssData = data;
        console.log(data);
      }

    );

  }

  itemTapped(i) {
    console.log(i);
    const browser = this.inappbrowser.create(i, '_self');
    browser.on('loadstop').subscribe(event => {
      browser.insertCSS({ code: "body{color: red;" });
    });

    // browser.close();
  }
}
