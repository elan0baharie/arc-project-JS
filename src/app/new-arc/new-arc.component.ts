import { Component, OnInit } from '@angular/core';
import { UserStory } from '../user-story.model';
import { UserStoryService } from '../user-story.service';

@Component({
  selector: 'app-new-arc',
  templateUrl: './new-arc.component.html',
  styleUrls: ['./new-arc.component.css'],
  providers: [UserStoryService]
})
export class NewArcComponent implements OnInit {

  constructor(private userStoryService: UserStoryService) { }

  ngOnInit() {
  }

    submitForm(newTitle : string, author: string) {
      var newStory: UserStory = new UserStory(newTitle, author);
      this.userStoryService.addStory(newStory);
    }
}
