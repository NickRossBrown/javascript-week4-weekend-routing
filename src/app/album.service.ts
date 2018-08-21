import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-albums';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AlbumService {

  albums: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.albums = database.list('albums');
  }

  // Here, we call database (which is what we named our instance of AngularFireDatabase object in the constructor), then call .list to specify we're gathering a list of multiple things (remember, we're expecting a FirebaseListObservable)

  getAlbums(){
    return this.albums;
  }
  // getAlbums() is called in MarketplaceComponent. It uses our AlbumService to retrieve its data. But because getAlbums() now returns a FirebaseListObservable<any[]> object, we need to make sure the album property in MarketplaceComponent matches this data type:

  getAlbumById(albumId: number){
    for (var i = 0; i <= ALBUMS.length - 1; i++) {
      if (ALBUMS[i].id === albumId) {
        return ALBUMS[i];
      }
    }
  }

}


// As you can see, it simply returns the list of Albums we imported into the file in the line import { ALBUMS } from './mock-albums';
