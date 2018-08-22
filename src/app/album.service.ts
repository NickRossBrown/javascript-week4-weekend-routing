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


  addAlbum(newAlbum: Album) {
    this.albums.push(newAlbum);
  }

//   Here, the addAlbum() method refers to the this.albums defined in the service's constructor. this.albums refers to the specific area of our database where our list of Albums is stored.
//
// Because this.albums is a FirebaseListObservable<any[]>, as declared at the top of the file, it has many of the same properties and capabilities of any other list or array. We can simply call push() on it to add our new album to the list.

getAlbumById(albumId: string){
  return this.database.object('albums/' + albumId);
}
//
// Notice albumId is now a string, not a number. Firebase keys are strings.
//
// Additionally, we're now calling this.database.object() instead of .list(). This is because we're requesting only a single object from Firebase, not an entire list.
//
// We're also including albumId as an argument to the object() method. This is because we need to tell Firebase where to look for our object. Remember, each database entry is located under its key. All entries are also nested in a larger albums table. Therefore we specify "albums/" as the location. This prompts Firebase to look in our Albums list, for the Album residing under whatever key we provide this method.

updateAlbum(localUpdatedAlbum){
    var albumEntryInFirebase = this.getAlbumById(localUpdatedAlbum.$key);
    albumEntryInFirebase.update({title: localUpdatedAlbum.title,
                                artist: localUpdatedAlbum.artist,
                                description: localUpdatedAlbum.description});
  }

//  --- updateAlbum() takes the local copy of the Album as an argument. Remember, this local version of Album has been edited with our two-way data binding edit form.
//
// ---It calls the existing getAlbumById() method to locate the Firebase entry corresponding to this Album. We assign this Firebase entry to the variable albumEntryInFirebase.
//
// ---getAlbumById() requires the Firebase-assigned $key as an argument. So we call localUpdatedAlbum.$key within the argument to getAlbumById().
//
// ---After the database entry has been located, we call AngularFire's built in update() method on albumEntryInFirebase.
//
// ---We update() the Album's new properties. These are formatted as key-value pairs. The key in each refers to the property in Firebase we're updating. The value of each contains the Album's local, updated properties.

}
