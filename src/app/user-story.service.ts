import { Injectable } from '@angular/core';
import { UserStory } from './user-story.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable  } from 'angularfire2/database';

@Injectable()
export class UserStoryService {
  userStories: FirebaseListObservable<any[]>;
  userStoryKey: string;

  constructor(private database: AngularFireDatabase) {
    this.userStories =  database.list('/user-files/user-1');
  }

  getUserStories(){
    return this.userStories;
  }

  addStory(newStory: UserStory) {
    this.userStories.push(newStory);
  }
}
