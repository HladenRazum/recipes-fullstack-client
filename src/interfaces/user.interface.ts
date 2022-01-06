export type UserRoles = "ANONYMOUS" | "REGISTERED" | "ADMIN";
const URL = "http://localhost:9000/api/";

export interface IUser {
   username: string;
   firstname: string;
   lastname: string;
   email: string;
   role: UserRoles;
   // createdAt: Date;
}

export class UserClass {
   constructor(
      private username: string,
      private password: string,
      private email: string,
      private role: UserRoles,
      private lastname?: string,
      private firstname?: string
   ) {}

   async create() {
      try {
         const user = new UserClass(
            this.username,
            this.password,
            this.email,
            (this.role = "REGISTERED")
         );
         const response = await fetch(URL + "users", {
            method: "POST",
            headers: {
               "Content-Type": "Application/JSON",
            },
            body: JSON.stringify(user),
         });
         if (!response.ok) {
            throw new Error("Could not create USER.");
         } else {
            const result = await response.json();
            console.log(result.data);
         }
         // Show feedback
      } catch (error) {
         console.log(error);
         // Show feedback
      }
   }

   async login() {
      try {
         const response = await fetch(URL + "login");
         if (!response.ok) {
            throw new Error("There was an error with your authentication");
         }
         const { token } = await response.json();
         alert(token);
      } catch (error) {
         alert(error);
      }
   }
}
