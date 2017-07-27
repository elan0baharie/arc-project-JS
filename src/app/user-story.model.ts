import { UserPoint } from './user-point.model';

export class UserStory {


  constructor(public title: string, public author: string, public arc = [
    {
      "role" : "Stasis",
      "primary"  : "...",
      "secondary" : "..."
    },
    {
      "role" : "Trigger",
      "primary"  : "...",
      "secondary" : "..."
    },
    {
      "role" : "Quest/ Rising Action",
      "primary"  : "...",
      "secondary" : "..."
    },
    {
      "role" : "Surprise",
      "primary"  : "...",
      "secondary" : "..."
    },
    {
      "role" : "Choice",
      "primary"  : "...",
      "secondary" : "..."
    },
    {
      "role" : "Climax",
      "primary"  : "...",
      "secondary" : "..."
    },
    {
      "role" : "Reversal",
      "primary"  : "...",
      "secondary" : "..."
    },
    {
      "role" : "Resolution",
      "primary"  : "",
      "secondary" : ""
    },
  ]){}
}
