import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListBookComponent} from "./list-book/list-book.component";
import {CreateBookComponent} from "./create-book/create-book.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {ViewBookComponent} from "./view-book/view-book.component";

const routes: Routes = [
  {
    path: '',
    component:ListBookComponent
  },
  {
    path: 'create',
    component:CreateBookComponent
  },
  {
    path: ':id/edit',
    component:EditBookComponent
  },
  {
    path: 'view',
    component:ViewBookComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
