import { AutoresizeDirective } from './../components/autoresize/autoresize';
import { NoteDetail } from './../pages/note-detail/note-detail';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { LOCALE_ID } from '@angular/core';
import { ExcerptFilter } from './../pipes/excerpt';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NoteDetail,
    ExcerptFilter,
    AutoresizeDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NoteDetail
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ExcerptFilter,
    AutoresizeDirective,
    Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LOCALE_ID, useValue: "pt-BR"}
  ]
})
export class AppModule {}
