import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { YtProvider } from '../../providers/yt/yt';
import { ListytPage } from '../listyt/listyt';

/**
 * Generated class for the PlaylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html',
})
export class PlaylistPage {
  channelId: string;
  playlists: Observable<any[]>;
  channelTitle: string;
  video: any;
  constructor(public navCtrl: NavController, private ytProvider: YtProvider, private NavParams: NavParams) {
  }

  ngOnInit() {
    this.channelId = this.NavParams.get('channelid');

    this.playlists = this.ytProvider.getPlaylistsForChannel(this.channelId);
    this.playlists.subscribe(data => {
      console.log('playlists: ', data);
    })
  }



  openPlaylist(id) {
    this.navCtrl.push(ListytPage, { id: id });

  }
}
