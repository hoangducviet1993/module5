import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TimelinesComponent} from "./component/timelines/timelines.component";
import {YoutubePlaylistComponent} from "./component/youtube-playlist/youtube-playlist.component";
import {YoutubePlayerComponent} from "./component/youtube-player/youtube-player.component";
import {ProductLisComponent} from "./product/product-lis/product-lis.component";

const routes: Routes = [
  {
    path:'timelines',
    component:TimelinesComponent
  },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children:[{
      path:':id',
      component:YoutubePlayerComponent
    }]
  },
  {
    path: 'product/list',
    component: ProductLisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
