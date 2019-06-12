import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RssfeedapiProvider } from '../../providers/rssfeedapi/rssfeedapi';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the RssfeednewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rssfeednew',
  templateUrl: 'rssfeednew.html',
})
export class RssfeednewPage {

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
    this.rssfeed.GetRssNew().subscribe(
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

  
  }
  // this.rssfeed.GetRss().subscribe( data => {
  //   this.rssData = data;
  //   console.log(data);
  // }
  // )
}
