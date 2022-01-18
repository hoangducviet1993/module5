import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TimelinesComponent} from "./component/timelines/timelines.component";
import {YoutubePlaylistComponent} from "./component/youtube-playlist/youtube-playlist.component";

const routes: Routes = [
  {
    path:'timelines',
    component:TimelinesComponent
  },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
