import {Category} from "./category";

export interface Product {
  id?: String;
  name?: String;
  price?: String;
  quantity?: String;
  category?:Category;
}
