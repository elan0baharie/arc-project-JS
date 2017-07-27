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

  deleteStory(userStory) {
    var storyToDelete = this.getUserStory(userStory.$key);
    storyToDelete.remove();
  }

  updateUserStory(userStoryDisplay){
    var userStoryFirebase = this.getUserStory(userStoryDisplay.$key);
    console.log(userStoryFirebase);
    userStoryFirebase.update({title: userStoryDisplay.title,
                                author: userStoryDisplay.author,
                                arc:[
                                  {
                                    role: "Stasis",
                                    logic: "Establish normality. Create the baseline of everyday reality for the protagonists and their world. A danger of a longer stasis section is that it bores the reader who consequently quickly gives up on the story.",
                                    primary: userStoryDisplay.arc[0].primary,
                                    secondary: userStoryDisplay.arc[0].secondary
                                  },
                                  {
                                    role: "Trigger",
                                    logic: "Create a stimulating event that breaks stasis and animates the characters in the story into the main action. Triggers can be major events such as killings or explosions, or may seem almost insignificant, such as something mentioned in a conversation. Triggers can also be positive or negative, notice or not noticed, sudden or gradual, short or long, etc.",
                                    primary: userStoryDisplay.arc[1].primary,
                                    secondary: userStoryDisplay.arc[1].secondary
                                  },
                                  {
                                    role: "Quest/ Rising Action",
                                    logic: "Develop the quest, which is the purpose given to the protagonist for the story as a result of the trigger. This will take up much of the novel and include the points below. A stated or unstated purpose of the quest may be to return the protagonist to the original stasis (while perhaps an antagonist opposes this).",
                                    primary: userStoryDisplay.arc[2].primary,
                                    secondary: userStoryDisplay.arc[2].secondary
                                  },
                                  {
                                    role: "Surprise",
                                    logic: "Introduce surprises that sustain interest and intrigue in the story, and give opportunity for character development. To be a surprise, an event must be unexpected, at least in part. To work within the story, it should be plausible and make sense to the reader, at least in retrospect. A poor surprise makes them feel disappointed and disillusioned.",
                                    primary: userStoryDisplay.arc[3].primary,
                                    secondary: userStoryDisplay.arc[3].secondary
                                  },
                                  {
                                    role: "Choice",
                                    logic: "At times there will be difficult decisions where the hero might turn back or aside. Critical decisions are significant and essential, for example to continue with the quest, to pause to help others, to fight evil, etc. Simple examples can be cited in the morality plays popular circa the Middle ages. Such decisions should be consistent with the character, although they can also be transformational, changing the person (such as when a coward decides to act bravely). Showing the struggle to decide and the exercise of free will can be important.",
                                    primary: userStoryDisplay.arc[4].primary,
                                    secondary: userStoryDisplay.arc[4].secondary
                                  },
                                  {
                                    role: "Climax",
                                    logic: "The quest builds through surprises and critical choices until it reaches a climax, a point where tensions must be resolved. There may be a number of minor and major climaxes through the story, leading to the grand climax near the end. While minor climaxes resolve minor tensions and larger tensions are resolved at major climaxes, there is still an underlying building tension that can only be resolved by the grand climax where the whole quest is finally resolved. It is through this sequence of climaxes that the story arc is built and the reader bound into the journey of the hero and other protagonists.",
                                    primary: userStoryDisplay.arc[5].primary,
                                    secondary: userStoryDisplay.arc[5].secondary
                                  },
                                  {
                                    role: "Reversal",
                                    logic: "In the reversal, the hero integrates all of the learning, becoming a true hero, usually without losing their original charm and personality. Other characters may also change, particularly when they have journeyed and developed together. Reversals are a the result of the journey and are, as such, inevitable. You do not battle monsters and stay the same person, yet that person is still within you. They should make sense and make the reader nod in agreement of the just transformations that they are.",
                                    primary: userStoryDisplay.arc[6].primary,
                                    secondary: userStoryDisplay.arc[6].secondary
                                  },
                                  {
                                    role: "Resolution",
                                    logic: "In the final resolution, a new stasis is found. This is also inevitable as all tensions are resolved. This new stasis is seldom the same as the original one as characters have learned and grown. It may also serve as a platform for another adventure, perhaps where side characters take on a bigger role or where the hero develops more subtly into a broader, more rounded character. The next story may also be hinted at with a new trigger, such as a discovery that the antagonist not having been fully vanquished or a new trouble is brewing.",
                                    primary: userStoryDisplay.arc[7].primary,
                                    secondary: userStoryDisplay.arc[7].secondary
                                  }
                                ]
    });
  }
}
