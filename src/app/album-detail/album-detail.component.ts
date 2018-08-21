import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';

import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [AlbumService]
})
export class AlbumDetailComponent implements OnInit {
  albumId: string;
  albumToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumService: AlbumService

  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.albumId = urlParameters['id'];
   });
   this.albumToDisplay = this.albumService.getAlbumById(this.albumId);
  }
//  --- We import the FirebaseObjectObservable package at the top of the file.
// ---We've update the albumId property to be a string here, too.
// ---albumToDisplay is no longer an Album object.
// ---We remove the parseInt() from ngOnInit(), because Firebase is now expecting a string key.




}
