import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { YtProvider } from '../providers/yt/yt';
import { LoadingProvider } from '../providers/loading/loading';
import { HttpClientModule } from '@angular/common/http';
import { FirestoreServiceProvider } from '../providers/firestore-service/firestore-service';
import { PlaylistPage } from '../pages/playlist/playlist';
import { HttpModule } from '@angular/http';
import { BatteryStatus } from '@ionic-native/battery-status'
import { Flashlight } from '@ionic-native/flashlight'
import { InAppBrowser } from '@ionic-native/in-app-browser'
import { OpenNativeSettings } from '@ionic-native/open-native-settings'
import { Camera } from '@ionic-native/camera'
import { WatchpagePage } from '../pages/watchpage/watchpage';
import { SettingPage } from '../pages/setting/setting';
import { ListytPage } from '../pages/listyt/listyt';
import { RssfeedbeautyPage } from '../pages/rssfeedbeauty/rssfeedbeauty';
import { RssfeedcrimePage } from '../pages/rssfeedcrime/rssfeedcrime';
import { RssfeedeconomyPage } from '../pages/rssfeedeconomy/rssfeedeconomy';
import { RssfeedentertainmentPage } from '../pages/rssfeedentertainment/rssfeedentertainment';
import { RssfeedfootballPage } from '../pages/rssfeedfootball/rssfeedfootball';
import { RssfeedgolfPage } from '../pages/rssfeedgolf/rssfeedgolf';
import { RssfeedhoroscoopePage } from '../pages/rssfeedhoroscoope/rssfeedhoroscoope';
import { RssfeeditPage } from '../pages/rssfeedit/rssfeedit';
import { RssfeednewPage } from '../pages/rssfeednew/rssfeednew';
import { RssfeedpoliticsPage } from '../pages/rssfeedpolitics/rssfeedpolitics';
import { RssfeedtennisPage } from '../pages/rssfeedtennis/rssfeedtennis';
import { RssfeednewgamePage } from '../pages/rssfeednewgame/rssfeednewgame';
import { RssfeedworldPage } from '../pages/rssfeedworld/rssfeedworld';
import { RssfeedapiProvider } from '../providers/rssfeedapi/rssfeedapi';
import { ExtendedDeviceInformation } from '@ionic-native/extended-device-information';
import { HelpPage } from '../pages/help/help';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PlaylistPage,
    WatchpagePage,
    SettingPage,
    ListytPage,
    RssfeedbeautyPage,
    RssfeedcrimePage,
    RssfeedeconomyPage,
    RssfeedentertainmentPage,
    RssfeedfootballPage,RssfeedgolfPage,
    RssfeedhoroscoopePage,
    RssfeeditPage,
    RssfeednewPage,
    RssfeedpoliticsPage,
    RssfeedtennisPage,RssfeednewgamePage,
    RssfeedworldPage,
    HelpPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PlaylistPage,
    WatchpagePage,SettingPage,
    ListytPage,
    RssfeedbeautyPage,
    RssfeedcrimePage,
    RssfeedeconomyPage,
    RssfeedentertainmentPage,
    RssfeedfootballPage,RssfeedgolfPage,
    RssfeedhoroscoopePage,
    RssfeeditPage,
    RssfeednewPage,
    RssfeedpoliticsPage,
    RssfeedtennisPage,RssfeednewgamePage,
    RssfeedworldPage,
    HelpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    YtProvider,
    LoadingProvider,
    FirestoreServiceProvider,
    BatteryStatus,
    Flashlight,
    InAppBrowser,
    OpenNativeSettings,
    Camera,
    RssfeedapiProvider,
    ExtendedDeviceInformation
  ]
})
export class AppModule {}
