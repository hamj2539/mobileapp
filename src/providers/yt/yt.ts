import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class YtProvider {
  apiKey = 'AIzaSyA5h7OuplrR57zKHBb3nNbKjtUub34wku0';

  constructor(public http: Http) {}

  getPlaylistsForChannel(channel) {
    return this.http.get('https://www.googleapis.com/youtube/v3/playlists?key=' 
    + this.apiKey + '&channelId=' 
    + channel + '&part=snippet,id&maxResults=20')
    .map((res) => {
      return res.json()['items'];
    })
  }

  getListVideos(listId) {
    return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?key=' + this.apiKey + '&playlistId=' + listId +'&part=snippet,id&maxResults=20')
    .map((res) => {
      return res.json()['items'];
    })
  }

  getCategories(){
    return this.http.get('https://www.googleapis.com/youtube/v3/videoCategories?order=viewCount&part=snippet&regionCode=US&key='+this.apiKey)
    .map((res) => {
      return res.json()['items'];
    })
  }

  getVideos(category){
    return this.http.get('https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId='+category+'&key='+this.apiKey)
    .map((res) => {
      return res.json()['items'];
    })
  }
}

