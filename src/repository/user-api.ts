export type UserIdType = "string";

const BASE_URL = "http://localhost:9000/api";

export type UserRoles = "REGISTERED" | "ADMIN";

export interface UserModel {
   name: string;
   email: string;
   password: string;
   role?: UserRoles;
   _id?: UserIdType | undefined;
}

class UserClass implements UserModel {
   public role: UserRoles = "REGISTERED";
   public _id?: UserIdType | undefined;
   constructor(
      public name: string,
      public email: string,
      public password: string,
   ) {
   }
}

class UsersAPI extends UserClass {

   // Register a new user
   async register(user: UserModel) {
      try {
         const response = await fetch(`BASE_URL/register`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
         });

         if (!response.ok) {
            throw new Error(`Failed register request. ERROR CODE: ${response.status}`);
         }

         const data = await response.json();
         console.log(data);

      } catch (error) {
         console.log(error);
      }
   }

}

export default UsersAPI;