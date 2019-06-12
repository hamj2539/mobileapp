import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the WatchpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-watchpage',
  templateUrl: 'watchpage.html',
})
export class WatchpagePage {
  video: any;
  title: string;
  code: any;
  description:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private sanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
    this.video = this.navParams.get('video')
    this.title = this.video.snippet.title
    this.description = this.video.snippet.description
    console.log(this.video.snippet.title);
    this.code = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.video.snippet.resourceId.videoId);
  }

}
