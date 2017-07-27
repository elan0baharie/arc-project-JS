import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Story } from '../story.model';
import { DefaultStoriesService } from '../default-stories.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
  providers: [ DefaultStoriesService ]
})
export class StoryComponent implements OnInit {
  storyKey: string;
  storyToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private defaultStoryService: DefaultStoriesService){ }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.storyKey = urlParameters['id'];
      console.log(this.storyKey);
    });
    this.defaultStoryService.getStoryByKey(this.storyKey).subscribe(dataLastEmittedFromObserver => {
      this.storyToDisplay = dataLastEmittedFromObserver;
    })
  }

}
