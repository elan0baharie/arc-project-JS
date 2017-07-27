import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { UserStoryService } from '../user-story.service';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-user-outline',
  templateUrl: './user-outline.component.html',
  styleUrls: ['./user-outline.component.css'],
  providers: [ UserStoryService ]
})
export class UserOutlineComponent implements OnInit {
  outlineKey: string;
  outlineToDisplay: FirebaseObjectObservable<any>;
  userArcPoints: FirebaseListObservable<any[]>;

  constructor(private route: ActivatedRoute, private location: Location, private userStoryService: UserStoryService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.outlineKey = urlParameters['id'];
      console.log(this.outlineKey);
    });
    this.userStoryService.getUserStory(this.outlineKey).subscribe(dataLastEmittedFromObserver => {
      this.outlineToDisplay = dataLastEmittedFromObserver;
    });
    this.userArcPoints = this.userStoryService.getUserArc();
    
  }

}
