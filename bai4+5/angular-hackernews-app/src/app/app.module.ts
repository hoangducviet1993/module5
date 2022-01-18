import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './component/article/article.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LikeComponent } from './component/like/like.component';
import { NameCardComponent } from './component/name-card/name-card.component';
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component';
import { DemoFormComponent } from './component/demo-form/demo-form.component';
import { ProductComponent } from './component/product/product.component';
import { TodoComponent } from './component/todo/todo.component';
import { UserComponent } from './component/user/user.component';
import { TimelinesComponent } from './component/timelines/timelines.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    LikeComponent,
    NameCardComponent,
    ProgressBarComponent,
    DemoFormComponent,
    ProductComponent,
    TodoComponent,
    UserComponent,
    TimelinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
