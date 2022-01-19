export type UserIdType = "string";

const BASE_URL = "http://localhost:9000";

export type UserRoles = "REGISTERED" | "ADMIN";

export type JWT = string;

interface UsersApiRepo<T> {
   register(user: T): Promise<T>;
   login(user: T): Promise<T>;
   // resetPassword(id: UserIdType): Promise<T>;
   // deleteUserId(id: UserIdType): Promise<T>;
}
export interface IUser {
   username: string;
   password: string;
   email: string;
   role?: UserRoles;
   _id?: UserIdType | undefined;
}

export class UserClass {
   public role?: UserRoles = "REGISTERED";
   public _id?: UserIdType | undefined;
   constructor(
      public username: string,
      public password: string,
      public email?: string
   ) {}
}

class UsersRepo implements UsersApiRepo<UserClass> {
   // Register a new user
   async register(user: UserClass) {
      try {
         const response = await fetch(`${BASE_URL}/api/users`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
         });

         const data = await response.json();
         console.log(data);
         return data;
      } catch (error) {
         console.log(error);
      }
   }

   async login(user: UserClass) {
      try {
         const response = await fetch(`${BASE_URL}/api/login`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
         });

         const data = await response.json();

         return data;
      } catch (error) {
         console.log(error);
      }
   }
}

export const UsersAPI: UsersApiRepo<UserClass> = new UsersRepo();
