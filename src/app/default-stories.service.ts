import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable  } from 'angularfire2/database';

import { Story } from './story.model';

@Injectable()
export class DefaultStoriesService {
  defaultStories: FirebaseListObservable<any[]>;
  storyKey: string;

  constructor(private database: AngularFireDatabase) {
    this.defaultStories = database.list('/tools/default-stories');
  }

  getSampleStories(){
    return this.defaultStories;
  }

  getStoryByKey(storyKey: string){
    console.log("Service starts")
    console.log(storyKey);
    console.log(this.database.object('/tools/default-stories/' + storyKey));
    return this.database.object('/tools/default-stories/' + storyKey);
  }
}
