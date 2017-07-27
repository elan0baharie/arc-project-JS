import { Injectable } from '@angular/core';
import { UserStory } from './user-story.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable  } from 'angularfire2/database';

@Injectable()
export class UserStoryService {
  userStories: FirebaseListObservable<any[]>;
  userArc: FirebaseListObservable<any[]>;
  userStoryKey: string;

  constructor(private database: AngularFireDatabase) {
    this.userStories =  database.list('/user-files/user-1');
    
  }

  getUserStories(){
    return this.userStories;
  }

  getUserArc(){
    return this.userArc;
  }

  getUserStory(userStoryKey: string){
    console.log("Service starts")
    console.log(userStoryKey);
    console.log(this.database.object('/user-files/user-1/' + userStoryKey));
    return this.database.object('/user-files/user-1/' + userStoryKey);
  }

  addStory(newStory: UserStory) {
    this.userStories.push(newStory);
  }

  updateUserStory(userStoryDisplay){
    var userStoryFirebase = this.getUserStory(userStoryDisplay.$key);
    console.log(userStoryFirebase);
    userStoryFirebase.update({title: userStoryDisplay.title,
                                author: userStoryDisplay.author,
                                arc:[
                                  {
                                    role: "Stasis",
                                    primary: userStoryDisplay.arc[0].primary,
                                    secondary: userStoryDisplay.arc[0].secondary
                                  },
                                  {
                                    role: "Trigger",
                                    primary: userStoryDisplay.arc[1].primary,
                                    secondary: userStoryDisplay.arc[1].secondary
                                  },
                                  {
                                    role: "Quest/ Rising Action",
                                    primary: userStoryDisplay.arc[2].primary,
                                    secondary: userStoryDisplay.arc[2].secondary
                                  },
                                  {
                                    role: "Surprise",
                                    primary: userStoryDisplay.arc[3].primary,
                                    secondary: userStoryDisplay.arc[3].secondary
                                  },
                                  {
                                    role: "Choice",
                                    primary: userStoryDisplay.arc[4].primary,
                                    secondary: userStoryDisplay.arc[4].secondary
                                  },
                                  {
                                    role: "Climax",
                                    primary: userStoryDisplay.arc[5].primary,
                                    secondary: userStoryDisplay.arc[5].secondary
                                  },
                                  {
                                    role: "Reversal",
                                    primary: userStoryDisplay.arc[6].primary,
                                    secondary: userStoryDisplay.arc[6].secondary
                                  },
                                  {
                                    role: "Resolution",
                                    primary: userStoryDisplay.arc[7].primary,
                                    secondary: userStoryDisplay.arc[7].secondary
                                  }
                                ]
    });
  }
}
