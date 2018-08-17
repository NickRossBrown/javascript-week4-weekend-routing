import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]  //add a new property to the component's decorator called providers. It will correspond with an array containing our AlbumService:
})
export class MarketplaceComponent implements OnInit {

  albums: Album[];

  constructor(private router: Router, private albumService: AlbumService){}
  // Just like the Router already present, this ensures all new instances of MarketplaceComponent also have an instance of AlbumService, accessible by calling this.albumService anywhere in the MarketplaceComponent class.

  ngOnInit(){
    this.albums = this.albumService.getAlbums();
  }

 goToDetailPage(clickedAlbum: Album) {
     this.router.navigate(['albums', clickedAlbum.id]);
   };

}
