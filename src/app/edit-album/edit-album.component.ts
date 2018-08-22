import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../album.model';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.css']
})


export class EditAlbumComponent implements OnInit {
  @Input() selectedAlbum;
//   EditAlbumComponent doesn't yet know what selectedAlbum is. Remember "Data down, actions up"? We need to pass this data down from the parent MarketplaceComponent into the child EditAlbumComponent.
//
// To do this, EditAlbumComponent needs an @Input to accept data from its parent. We'll import Input from Angular core, and define an @Input named selectedAlbum:

  constructor() { }

  ngOnInit() {
  }

}
