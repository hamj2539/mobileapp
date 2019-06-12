import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { YtProvider } from '../../providers/yt/yt';
import { WatchpagePage } from '../watchpage/watchpage';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  videos: Observable<any[]>;
 
  constructor(private navParams: NavParams, private ytProvider: YtProvider, public navCtrl: NavController) {
    let listId = this.navParams.get('id');
    this.videos = this.ytProvider.getListVideos(listId);
  }
 
  openVideo(_video) {
    this.navCtrl.push(WatchpagePage, {video:_video});
  }
}
