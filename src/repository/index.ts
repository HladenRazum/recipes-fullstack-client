export type IdType = string;

export interface Repository<T, Z> {
   getAllItems(items: T[]): Promise<T[]>;
   add(item: T): Promise<T>;
   removeById(id: Z): Promise<T>;
   updateByID(id: Z): Promise<T>;
}


export interface IRecipe {
   name: string;
   instructions: string;
   _id?: IdType | undefined;
}


