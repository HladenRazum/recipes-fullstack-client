
export type IdType = string;

export interface ApiClient<T> {
   getAllItems(): Promise<T[]>;
   findItemById(id: IdType): Promise<T>;
   createItem(T: T): Promise<T>;
   updateItem(id: IdType): Promise<T>;
   deleteItemById(id: IdType): Promise<T>;
}

export async function processResponse<T>(
   respPromise: Promise<Response>,
   _id?: IdType | undefined
): Promise<T> {
   try {
      const resp = await respPromise;
      if (resp.status === 400) {
         throw new Error(await resp.json());
      } else if (!resp.ok) {
         throw new Error("Something went wrong!");
      }
      return (await resp.json()) as T;
   } catch (err: any) {
      throw new Error(err.message);
   }
}
