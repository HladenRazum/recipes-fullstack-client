export type UserIdType = "string";

const BASE_URL = "http://localhost:9000/api/users";

export type UserRoles = "REGISTERED" | "ADMIN";

interface UsersApiRepo<T> {
   register(user: T): Promise<T>;
   // login(id: UserIdType): Promise<T>;
   // resetPassword(id: UserIdType): Promise<T>;
   // deleteUserId(id: UserIdType): Promise<T>;
}
export interface IUser {
   username: string;
   email: string;
   password: string;
   role?: UserRoles;
   _id?: UserIdType | undefined;
}

export class UserClass {
   public role?: UserRoles = "REGISTERED";
   public _id?: UserIdType | undefined;
   constructor(
      public username: string,
      public email: string,
      public password: string
   ) { }
}

class UsersRepo implements UsersApiRepo<UserClass> {
   // Register a new user
   async register(user: UserClass) {
      try {
         const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
         });

         if (!response.ok) {
            throw new Error(
               `Failed register request. ERROR CODE: ${response.status}`
            );
         }
         const data = await response.json();
         console.log(data);
         return data;
      } catch (error) {
         console.log(error);
      }
   }
}

export const UsersAPI: UsersApiRepo<UserClass> = new UsersRepo();
