import { Component, Input, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.css'],
  providers: [AlbumService]
})


export class EditAlbumComponent implements OnInit {
  @Input() selectedAlbum;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }

  beginUpdatingAlbum(albumToUpdate){
    this.albumService.updateAlbum(albumToUpdate);
  }
  //--beginUpdatingAlbum() is triggered when the "Update" button registers a click event. It calls the AlbumService's updateAlbum() method, passing in the locally-updated Album.
  //
  //--As we discussed, updateAlbum() then locates and updates the Album's Firebase entry.
  beginDeletingAlbum(albumToDelete){
    if(confirm("Are you sure you want to delete this item from the inventory?")){
      this.albumService.deleteAlbum(albumToDelete);
    }
  }
  // Here, we display a pop-up confirmation, asking the user if they're sure they'd like to delete this item. If the user clicks ok the method will invoke our existing AlbumService, and request it run a method called deleteAlbum(). We pass in the Album the user has selected to delete as an argument.

}

// The code above injects the AlbumService into the EditAlbumComponent by completing the following steps, as detailed in the Services lesson earlier this week:
//
// Imports the AlbumService at the top of the file.
//
// Adds a providers property to the component's annotation.
//
// Registers AlbumService in the providers array.
//
// Declares a new instance of AlbumService in the constructor.
