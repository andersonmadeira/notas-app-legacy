import { Note } from './../../note';
import { NoteDetail } from './../note-detail/note-detail';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  notes: Note[] = [{
    id: 1,
    title: "Lorem ipsum dolor",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id iaculis sapien. Donec viverra, velit et efficitur suscipit, enim justo iaculis risus, quis feugiat magna tellus in est. Donec at urna eget lectus ullamcorper vulputate a ac elit. Sed bibendum non risus et luctus. Phasellus aliquet consectetur ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium enim sagittis, ornare dui id, finibus mauris. Praesent in mauris massa. Pellentesque dapibus rutrum suscipit. Vivamus dui nulla, dictum id sapien sed, tristique auctor leo. Nulla sed mauris sit amet libero molestie suscipit ac sagittis justo. Cras ut faucibus lectus, et pharetra justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    id: 1,
    title: "Morbi at condimentum",
    content: "Morbi at condimentum turpis. Nam venenatis libero nisi, et ullamcorper dui egestas tempor. Maecenas volutpat quis velit quis ultrices. Sed suscipit ante in ipsum pulvinar, eget faucibus justo vulputate. Aliquam fermentum tortor nec lacus sodales vulputate. Phasellus venenatis pretium enim, vitae porttitor velit placerat in. Vestibulum luctus semper velit, pellentesque sodales risus laoreet sed. Sed tincidunt tellus eu leo volutpat, ac finibus mauris tristique. Suspendisse eleifend neque mollis risus tempus, vitae gravida tortor euismod. Aenean porttitor justo massa, ut tempus justo tincidunt eget. Aliquam nibh orci, efficitur vel arcu nec, aliquet vehicula mi. Suspendisse molestie ipsum vitae tortor feugiat interdum. Vestibulum velit tellus, venenatis id imperdiet nec, vulputate mattis dui.",
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    id: 1,
    title: "Sed sit amet scelerisque",
    content: "Sed sit amet scelerisque nisl. Donec et suscipit mauris. Aenean congue vel ex vitae ornare. Quisque elementum diam nulla, eu auctor enim pellentesque quis. In hac habitasse platea dictumst. Sed hendrerit libero pharetra augue lacinia elementum. Cras eget mi orci. Pellentesque ut vestibulum dui. Nullam tempus libero at ante tempus tempus. Vestibulum sit amet libero sodales libero dapibus rutrum consequat at massa.",
    createdAt: new Date(),
    updatedAt: new Date()
  }];

  constructor(public navCtrl: NavController, public storage: Storage) {
    console.log(this.getData());
  }

  onCardEdit(note: Note) {
    this.navCtrl.push(NoteDetail, { note: note });
  }

  onSaveData() {
    this.storage.set('tasks', JSON.stringify(this.notes));
  }

  getData() {
    return this.storage.get('tasks');
  }

}
