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
  albumToDisplay: Album;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumService: AlbumService

  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
     this.albumId = urlParametersArray['id'];
   });
   this.albumService.getAlbumById(this.albumId).subscribe(dataLastEmittedFromObserver => {
     this.albumToDisplay = new Album(dataLastEmittedFromObserver.title,
                                      dataLastEmittedFromObserver.artist,
                                      dataLastEmittedFromObserver.description)
   })
  }
// --Here, we've added subscribe() to the same area of code that printed a FirebaseObjectObservable to our console at the beginning of the lesson.
//
//-this.database.object('/items/' + albumId) will result in a FirebaseObjectObservable, as we saw a moment ago.
//
//-We call subscribe() upon the FirebaseObjectObservable. Note that this method can only be called upon Observable objects.
//
//-Also, notice subscribe() uses the fat arrow notation we discussed previously, in the Dynamic Routing lesson.
//
//-The dataLastEmittedFromObserve variable in subscribe()'s parameters represents the data passed from Firebase using the FirebaseObjectObservable. Remember, the observer itself is not the data being provided by Firebase. Instead, it's the pipeline by which that data enters our application.






// ---Essentially, if you need to do something to a Firebase entry, but you can't access its properties or call class-specific methods on it because it's an Observable, consider using subscribe().
//
//---Or, if you want to use your own custom pipe in a template, consider subscribing to your data manually instead of relying on async. This will allow you to apply your own pipe in the template instead.
//
//---Lastly, know that observables aren't exclusive to Angular or Firebase, either! They're actually a new proposed standard for managing asynchronous data, and will be included in the ES7 version of JavaScript. There are already JavaScript libraries like RxJS that allow developers to utilize observers in almost any type of project, in any JavaScript framework.



}
