import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]  //add a new property to the component's decorator called providers. It will correspond with an array containing our AlbumService:
})
export class MarketplaceComponent implements OnInit {

  albums: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
   // we can use this.router.url to determine which route a component is being rendered in. We can use this information to dynamically hide or show content relevant to that route.

  constructor(private router: Router, private albumService: AlbumService){}
  // Just like the Router already present, this ensures all new instances of MarketplaceComponent also have an instance of AlbumService, accessible by calling this.albumService anywhere in the MarketplaceComponent class.

  ngOnInit(){
    this.albums = this.albumService.getAlbums();
    console.log(this.router.url);
  }

  goToDetailPage(clickedAlbum) {
     this.router.navigate(['albums', clickedAlbum.$key]);
   };
   // here, we're simply placing the Firebase $key in the :id dynamic segment, instead of the now-defunct id property from our Album model. When this line of code runs, the router will match this request to the albums/:id route, and load the corresponding AlbumDetailComponent

}
