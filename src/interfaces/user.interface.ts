export type UserRoles = "ANONYMOUS" | "REGISTERED" | "ADMIN";

export interface IUser {
   username: string;
   firstname: string;
   lastname: string;
   email: string;
   // role: UserRoles;
   // createdAt: Date;
}

export class UserClass {
   constructor(
      public username: string,
      public firstname: string,
      public lastname: string,
      public email: string
   ) {}

   async create() {
      try {
         const user = new UserClass(
            this.username,
            this.firstname,
            this.lastname,
            this.email
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
   // update() {
   //    fetch(URL, {
   //       method: "PUT",
   //       headers: {
   //          "Content-Type": "Application/JSON"         }
   //       body: {
   //          "username" : "123"
   //       },
   //    });
   // }
}
