import { Component, OnInit } from '@angular/core';
import { Arcpoint } from '../arcpoint.model';
import { Router } from '@angular/router';
import { UserStoryService } from '../user-story.service';
import { DefaultarcinfoService } from '../defaultarcinfo.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-arc-list',
  templateUrl: './arc-list.component.html',
  styleUrls: ['./arc-list.component.css'],
  providers: [ DefaultarcinfoService, UserStoryService ]
})
export class ArcListComponent implements OnInit {
  userStories: FirebaseListObservable<any[]>;

  constructor(private router: Router, private userStoryService: UserStoryService) { }

  ngOnInit() {
    this.userStories = this.userStoryService.getUserStories();
  }



}
