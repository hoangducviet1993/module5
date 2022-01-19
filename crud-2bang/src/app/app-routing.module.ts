import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from "./component/product-list/product-list.component";
import {ProductCreateComponent} from "./component/product-create/product-create.component";
import {ProductUpdateComponent} from "./component/product-update/product-update.component";

const routes: Routes = [
  {
    path: 'listProduct',
    component: ProductListComponent
  },
  {
    path: 'create',
    component: ProductCreateComponent
  },
  {
    path: 'update',
    component: ProductUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
