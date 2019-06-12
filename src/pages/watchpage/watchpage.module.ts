import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WatchpagePage } from './watchpage';

@NgModule({
  declarations: [
    WatchpagePage,
  ],
  imports: [
    IonicPageModule.forChild(WatchpagePage),
  ],
})
export class WatchpagePageModule {}
