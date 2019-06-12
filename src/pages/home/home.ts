import { Component, ViewChild } from '@angular/core';
import { Platform, Content, NavController } from 'ionic-angular';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { Message } from '../../models/message';
import { FormControl, FormBuilder } from '@angular/forms';
import { YtProvider } from '../../providers/yt/yt';
import { Observable } from 'rxjs/Observable';
import { FirestoreServiceProvider } from '../../providers/firestore-service/firestore-service';
import { PlaylistPage } from '../playlist/playlist';
import { Flashlight } from '@ionic-native/flashlight';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { BatteryStatus } from '@ionic-native/battery-status';
import { RssfeedhoroscoopePage } from '../rssfeedhoroscoope/rssfeedhoroscoope';
import { RssfeedworldPage } from '../rssfeedworld/rssfeedworld';
import { RssfeedtennisPage } from '../rssfeedtennis/rssfeedtennis';
import { RssfeednewgamePage } from '../rssfeednewgame/rssfeednewgame';
import { RssfeedbeautyPage } from '../rssfeedbeauty/rssfeedbeauty';
import { RssfeeditPage } from '../rssfeedit/rssfeedit';
import { RssfeedgolfPage } from '../rssfeedgolf/rssfeedgolf';
import { RssfeedfootballPage } from '../rssfeedfootball/rssfeedfootball';
import { RssfeedentertainmentPage } from '../rssfeedentertainment/rssfeedentertainment';
import { RssfeedeconomyPage } from '../rssfeedeconomy/rssfeedeconomy';
import { RssfeedcrimePage } from '../rssfeedcrime/rssfeedcrime';
import { RssfeedpoliticsPage } from '../rssfeedpolitics/rssfeedpolitics';
import { RssfeednewPage } from '../rssfeednew/rssfeednew';
import { SettingPage } from '../setting/setting';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Content) content: Content;
  accessToken: string = '1b50ebc6f6074ae4b4711b9b1deef89c';
  client;
  messages: Message[] = [];
  messageForm: any;
  chatBox: any;
  isLoading: boolean;
  playlists: Observable<any[]>;
  contentData: any;
  btlvl:any;
  photo:any;

  namecn: any;
  // channelid:any;

  constructor(public platform: Platform, public formBuilder: FormBuilder, public ytProvider: YtProvider, private db: FirestoreServiceProvider, public navCtrl: NavController,private flashlight: Flashlight,private camera: Camera,private batteryStatus: BatteryStatus) {
    this.chatBox = '';

    this.messageForm = formBuilder.group({
      message: new FormControl('')
    });

    this.client = new ApiAiClient({
      accessToken: this.accessToken
    });
  }
  ionViewWillEnter() {
    //** [EDIT] add some code for get all document from firestore when page active */
    this.retrieveCollection();
  }

  retrieveCollection(): void {
    //** [EDIT] add some code for get all document from firestore when page active */
    this.db.getDocuments(this.db.COLLECTION)
      .then((data) => {
        console.log(JSON.stringify(data));
        this.contentData = data;
        console.log(this.contentData);
      })
      .catch();

  }


  sendMessage(req: string, channelId: string) {
    if (!req || req === '') {
      return;
    }
    this.messages.push({ from: 'User', text: req });
    this.isLoading = true;
    this.client
      .textRequest(req)
      .then(response => {
        /* do something */
        console.log('res');
        console.log(response);
        this.contentData.forEach((data, i) => {
          if (response.result.fulfillment.speech == data.nameCN) {
            let channelid = data.channelid;
            console.log(channelid);
            this.navCtrl.push(PlaylistPage, { channelid });
          }else if(response.result.fulfillment.speech == "ข่าววันนี้") {
            if (i + 1 == this.contentData.length) {
            this.navCtrl.push(RssfeednewPage);
            this.isLoading = false;
            }
          }else if(response.result.fulfillment.speech == "ข่าวการเมือง") {
            if (i + 1 == this.contentData.length) {
            this.navCtrl.push(RssfeedpoliticsPage);
            this.isLoading = false;
            }
          }else if(response.result.fulfillment.speech == "ข่าวอาชญากรรม") {
            if (i + 1 == this.contentData.length) {
            this.navCtrl.push(RssfeedcrimePage);
            this.isLoading = false;
            }
          }else if(response.result.fulfillment.speech == "ข่าวเศรษฐกิจ") {
            if (i + 1 == this.contentData.length) {
            this.navCtrl.push(RssfeedeconomyPage);
            this.isLoading = false;
            }
          }else if(response.result.fulfillment.speech == "ข่าวบันเทิง") {
            if (i + 1 == this.contentData.length) {
            this.navCtrl.push(RssfeedentertainmentPage);
            this.isLoading = false;
            }
          }else if(response.result.fulfillment.speech == "ข่าวฟุตบอล") {
            if (i + 1 == this.contentData.length) {
            this.navCtrl.push(RssfeedfootballPage);
            this.isLoading = false;
            }
          }else if(response.result.fulfillment.speech == "ข่าวกอล์ฟ") {
            if (i + 1 == this.contentData.length) {
            this.navCtrl.push(RssfeedgolfPage);
            this.isLoading = false;
            }
          }else if(response.result.fulfillment.speech == "ข่าวไอที") {
            if (i + 1 == this.contentData.length) {
            this.navCtrl.push(RssfeeditPage);
            this.isLoading = false;
            }
          }else if(response.result.fulfillment.speech == "ข่าวความสวยงาม") {
            if (i + 1 == this.contentData.length) {
            this.navCtrl.push(RssfeedbeautyPage);
            this.isLoading = false;
            }
          }else if(response.result.fulfillment.speech == "ข่าววงการเกม") {
            if (i + 1 == this.contentData.length) {
            this.navCtrl.push(RssfeednewgamePage);
            this.isLoading = false;
            }
          }else if(response.result.fulfillment.speech == "ข่าวเทนนิส") {
            if (i + 1 == this.contentData.length) {
            this.navCtrl.push(RssfeedtennisPage);
            this.isLoading = false;
            }
          }else if(response.result.fulfillment.speech == "ข่าวรอบโลก") {
            if (i + 1 == this.contentData.length) {
            this.navCtrl.push(RssfeedworldPage);
            this.isLoading = false;
            }
          }else if(response.result.fulfillment.speech == "ดูดวง") {
            if (i + 1 == this.contentData.length) {
            this.navCtrl.push(RssfeedhoroscoopePage);
            this.isLoading = false;
            }
          }else if(response.result.fulfillment.speech == "เปิดไฟฉาย") {
            if (i + 1 == this.contentData.length) {
              this.flashlight.switchOn();
              this.isLoading = false;
            }
          }else if(response.result.fulfillment.speech == "ปิดไฟฉาย") {
            if (i + 1 == this.contentData.length) {
              this.flashlight.switchOff();
              this.isLoading = false;
            }
          }else if(response.result.fulfillment.speech == "ตืดต่อแอดมิน") {
            if (i + 1 == this.contentData.length) {
              window.open('http://www.facebook.com/ha.jafjaf','_system', 'location=yes');
              this.isLoading = false;
            }
          }else if(response.result.fulfillment.speech == "เช็คสเปคเครื่อง") {
            if (i + 1 == this.contentData.length) {
              this.navCtrl.push(SettingPage);
              this.isLoading = false;
            }
          }else if(response.result.fulfillment.speech == "เปิดกล้อง") {
            if (i + 1 == this.contentData.length) {
              const options: CameraOptions = {
                quality: 100,
                destinationType: this.camera.DestinationType.FILE_URI,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE
              }
              
              this.camera.getPicture(options).then((imageData) => {
               // imageData is either a base64 encoded string or a file URI
               // If it's base64 (DATA_URL):
              this.photo = 'data:image/jpeg;base64,' + imageData;
              }, (err) => {
               // Handle error
              });
            }
          }else if(response.result.fulfillment.speech == "เช็คแบต") {
            
              this.batteryStatus.onChange().subscribe(status => {
                console.log(status.level, status.isPlugged);
                this.btlvl = status.level;
                this.messages.push({
                  from: 'BigCat',
                  text: this.btlvl
                });
                this.isLoading = false;
             });
            }
           else {
            if (i + 1 == this.contentData.length) {
              this.messages.push({
                from: 'BigCat',
                text: response.result.fulfillment.speech
              });
              this.scrollToBottom();
              this.isLoading = false;
            }
          }
        });
      })
      .catch(error => {
        /* do something here too */
        console.log('error');
        console.log(error);
      });

    this.chatBox = '';
  }

  scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 100);
  }

  // searchPlaylists() {
  //   this.playlists = this.ytProvider.getPlaylistsForChannel(this.channelId);
  //   this.playlists.subscribe(data => {
  //     console.log('playlists: ', data);
  //   }) , err => {
  //     this.messages.push({
  //       from: 'BigCat',
  //       text: 'ไม่พบข้อมูล'
  //     });
  // }}
}