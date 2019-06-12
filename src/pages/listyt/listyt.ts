import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { YtProvider } from '../../providers/yt/yt';
import { WatchpagePage } from '../watchpage/watchpage';

/**
 * Generated class for the ListytPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listyt',
  templateUrl: 'listyt.html',
})
export class ListytPage {
  videos: Observable<any[]>;
 
  constructor(private navParams: NavParams, private ytProvider: YtProvider, public navCtrl: NavController) {
    let listId = this.navParams.get('id');
    this.videos = this.ytProvider.getListVideos(listId);
    console.log(this.videos);
  }
 
  openVideo(_video) {
    this.navCtrl.push(WatchpagePage, {video:_video});
  }
}
