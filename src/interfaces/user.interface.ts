export type UserRoles = "ANONYMOUS" | "REGISTERED" | "ADMIN";

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
      private firstname: string,
      private lastname: string,
      private email: string,
      private role: UserRoles
   ) {}

   async create() {
      try {
         const user = new UserClass(
            this.username,
            this.firstname,
            this.lastname,
            this.email,
            (this.role = "REGISTERED")
         );
         const response = await fetch("http://localhost:9000/users", {
            method: "POST",
            headers: {
               "Content-Type": "Application/JSON",
            },
            body: JSON.stringify(user),
         });
         if (!response.ok) {
            throw new Error("Could not create USER.");
         }
         console.log("User was created successfully");
      } catch (error) {
         console.log(error);
      }
   }
}
