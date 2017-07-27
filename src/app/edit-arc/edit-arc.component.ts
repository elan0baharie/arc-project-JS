import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { UserStoryService } from '../user-story.service';

@Component({
  selector: 'app-edit-arc',
  templateUrl: './edit-arc.component.html',
  styleUrls: ['./edit-arc.component.css'],
  providers: [ UserStoryService ]
})
export class EditArcComponent implements OnInit {
  @Input() selectedAlbum;
  userStoryKey: string;
  userStoryDisplay: FirebaseObjectObservable<any>;

  constructor(private route: ActivatedRoute, private location: Location, private userStoryService: UserStoryService){ }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.userStoryKey = urlParameters['id'];
      console.log(this.userStoryKey);
    });
    this.userStoryService.getUserStory(this.userStoryKey).subscribe(dataLastEmittedFromObserver => {
      this.userStoryDisplay = dataLastEmittedFromObserver;
    })
  }

  updateStory(userStoryDisplay) {
    console.log(userStoryDisplay.$key);
    this.userStoryService.updateUserStory(userStoryDisplay);
  }
}
