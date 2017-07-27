import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent }   from './about/about.component';
import { ArcListComponent }   from './arc-list/arc-list.component';
import { ArcDetailComponent } from './arc-detail/arc-detail.component';
import { StoryComponent } from './story/story.component';
import { NewArcComponent } from './new-arc/new-arc.component';
import { EditArcComponent } from './edit-arc/edit-arc.component';
import { UserOutlineComponent } from './user-outline/user-outline.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'arc-list',
    component: ArcListComponent
  },
  {
    path: 'storys/:id',
    component: StoryComponent
  },
  {
    path: 'new-arc',
    component: NewArcComponent
  },
  {
    path: 'edit-story/:id',
    component: EditArcComponent
  },
  {
    path: 'outline/:id',
    component: UserOutlineComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
