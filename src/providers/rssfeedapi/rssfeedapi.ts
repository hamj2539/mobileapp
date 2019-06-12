import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpParams, HttpClient } from '@angular/common/http';

/*
  Generated class for the RssfeedapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RssfeedapiProvider {
  private API_URL: string;

  constructor(public http: HttpClient) {
    console.log('Hello RssfeedapiProvider Provider');
    this.API_URL = "https://api.rss2json.com/v1/api.json";
  }

  // GetRss() {
  //   const RSS_URL = 'http://rssfeeds.sanook.com/rss/feeds/sanook/news.index.xml';
  //   const API = 'b6mzotmgktwqeh8zpekxqzheq9utpss3aravh79a';
  //   const count = 10;
  //   const API_URL = 'https://api.rss2json.com/v1/api.json';
  //   const response = this.http.post(API_URL,  { 'rss_url': RSS_URL, 'api_key': API, 'count':count}).map(res => res.json());
  //   return response;
  // }
  GetRssNew() {
    const params = { params: new HttpParams().set('rss_url', 'http://rssfeeds.sanook.com/rss/feeds/sanook/news.index.xml').set('api_key', 'b6mzotmgktwqeh8zpekxqzheq9utpss3aravh79a')
    }
    return this.http.get(this.API_URL, params);
  }

  GetRssPolitics() {
    const params = { params: new HttpParams().set('rss_url', 'http://rssfeeds.sanook.com/rss/feeds/sanook/news.politic.xml').set('api_key', 'b6mzotmgktwqeh8zpekxqzheq9utpss3aravh79a')
    }
    return this.http.get(this.API_URL, params);
  }

  GetRssCrime() {
    const params = { params: new HttpParams().set('rss_url', 'http://rssfeeds.sanook.com/rss/feeds/sanook/news.crime.xml').set('api_key', 'b6mzotmgktwqeh8zpekxqzheq9utpss3aravh79a')
    }
    return this.http.get(this.API_URL, params);
  }

  GetRssWorld() {
    const params = { params: new HttpParams().set('rss_url', 'http://rssfeeds.sanook.com/rss/feeds/sanook/news.world.xml').set('api_key', 'b6mzotmgktwqeh8zpekxqzheq9utpss3aravh79a')
    }
    return this.http.get(this.API_URL, params);
  }

  GetRssEconomy() {
    const params = { params: new HttpParams().set('rss_url', 'http://rssfeeds.sanook.com/rss/feeds/sanook/news.economic.xml').set('api_key', 'b6mzotmgktwqeh8zpekxqzheq9utpss3aravh79a')
    }
    return this.http.get(this.API_URL, params);
  }

  GetRssEntertainment() {
    const params = { params: new HttpParams().set('rss_url', 'http://rssfeeds.sanook.com/rss/feeds/sanook/news.entertain.xml').set('api_key', 'b6mzotmgktwqeh8zpekxqzheq9utpss3aravh79a')
    }
    return this.http.get(this.API_URL, params);
  }

  GetRssFootball() {
    const params = { params: new HttpParams().set('rss_url', 'http://rssfeeds.sanook.com/rss/feeds/sanook/sport.football.xml').set('api_key', 'b6mzotmgktwqeh8zpekxqzheq9utpss3aravh79a')
    }
    return this.http.get(this.API_URL, params);
  }

  GetRssGolf() {
    const params = { params: new HttpParams().set('rss_url', 'http://rssfeeds.sanook.com/rss/feeds/sanook/sport.golf.xml').set('api_key', 'b6mzotmgktwqeh8zpekxqzheq9utpss3aravh79a')
    }
    return this.http.get(this.API_URL, params);
  }

  GetRssTennis() {
    const params = { params: new HttpParams().set('rss_url', 'http://rssfeeds.sanook.com/rss/feeds/sanook/sport.tennis.xml').set('api_key', 'b6mzotmgktwqeh8zpekxqzheq9utpss3aravh79a')
    }
    return this.http.get(this.API_URL, params);
  }

  GetRssNewIT() {
    const params = { params: new HttpParams().set('rss_url', 'http://rssfeeds.sanook.com/rss/feeds/sanook/hitech.news.xml').set('api_key', 'b6mzotmgktwqeh8zpekxqzheq9utpss3aravh79a')
    }
    return this.http.get(this.API_URL, params);
  }

  GetRssNewGame() {
    const params = { params: new HttpParams().set('rss_url', 'http://rssfeeds.sanook.com/rss/feeds/sanook/game.news.xml').set('api_key', 'b6mzotmgktwqeh8zpekxqzheq9utpss3aravh79a')
    }
    return this.http.get(this.API_URL, params);
  }

  GetRssBeauty() {
    const params = { params: new HttpParams().set('rss_url', 'http://rssfeeds.sanook.com/rss/feeds/sanook/women.beauty.xml').set('api_key', 'b6mzotmgktwqeh8zpekxqzheq9utpss3aravh79a')
    }
    return this.http.get(this.API_URL, params);
  }

  GetRssHoroscoope() {
    const params = { params: new HttpParams().set('rss_url', 'http://rssfeeds.sanook.com/rss/feeds/sanook/horoscope.index.xml').set('api_key', 'b6mzotmgktwqeh8zpekxqzheq9utpss3aravh79a')
    }
    return this.http.get(this.API_URL, params);
  }
}
