import { Note } from './../../note';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-note-detail',
  templateUrl: 'note-detail.html',
})
export class NoteDetail {

  note: Note;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.note = navParams.get('note');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoteDetail');
  }

}
