import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';
//---ActivatedRoute contains information about a route associated with a component loaded in an outlet. This is required for dynamic routing.
//
// ---Params will help us collect parameters for use when routing. Navigating to our Album detail page requires that we send the id of the Album we're attempting to view so we import this functionality to allow us to attach extra information to our request.
//
// ---Location helps normalize URLs when traveling between routes, especially dynamic ones. (Normalizing URLs means ensuring different paths in the application all follow the same pattern consistently).
//
// ---Album refers to the model we created in the previous lesson.

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [AlbumService]
})
export class AlbumDetailComponent implements OnInit {
  albumId: number;
  albumToDisplay: Album;

  constructor(private route: ActivatedRoute, private location: Location,
  // By including the parameters constructor(private route: ActivatedRoute, private location: Location), any instance of AlbumDetailComponent will have route and location properties that can be accessed by calling this.route and this.location.

  private albumService: AlbumService

  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.albumId = parseInt(urlParameters['id']);
   });
   this.albumToDisplay = this.albumService.getAlbumById(this.albumId);
  }
  // ngOnInit() is a component lifecycle hook. These are a series of methods that Angular automatically calls at certain milestones in a component's life. Here it is:
//---Gathers the ActivatedRoute object we placed in constructor() by calling this.route.
//
//---Calls .params on the route to retrieve any parameters. Remember, we added parameters to the route in our goToDetailPage() method in the last lesson with the code this.router.navigate(['albums', clickedAlbum.id]);. This will return an array.
//
//---Loops through all the parameters using forEach(), temporarily assigning each item parameter the variable name urlParameters.
//
//---Retrieves the number in a key-value pair in urlParameters with the key id. (This is called id because we named it id in the dynamic segment of our route's path).
//
//---Assigns the id value we retrieve to the AlbumDetailComponent's albumId property.

}
