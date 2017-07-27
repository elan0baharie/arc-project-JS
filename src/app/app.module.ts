import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ArcListComponent } from './arc-list/arc-list.component';
import { ArcDetailComponent } from './arc-detail/arc-detail.component';
import { StoryComponent } from './story/story.component';
import { NewArcComponent } from './new-arc/new-arc.component';
import { EditArcComponent } from './edit-arc/edit-arc.component';
import { UserOutlineComponent } from './user-outline/user-outline.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ArcListComponent,
    ArcDetailComponent,
    StoryComponent,
    NewArcComponent,
    EditArcComponent,
    UserOutlineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
