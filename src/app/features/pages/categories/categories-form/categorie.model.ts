export interface Categoria {
  
  name?:string;
  description?: string;
  image?: string;
  id?:number;
  parent_category_id?: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}