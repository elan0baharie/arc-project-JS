import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Story } from '../story.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { DefaultStoriesService } from '../default-stories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ DefaultStoriesService ]
})
export class HomeComponent implements OnInit {
  defaultStories: FirebaseListObservable<any[]>;

  constructor(private router: Router, private defaultStoriesService: DefaultStoriesService) { }

  ngOnInit() {
    this.defaultStories = this.defaultStoriesService.getSampleStories();
  }

  goToStory(defaultStory){
    console.log(defaultStory);
     this.router.navigate(['storys', defaultStory.$key]);
  }

}
