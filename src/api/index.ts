const BASE_URL = "http://localhost:9000/";
const USERS_PREFIX = "users";
const RECIPES_PREFIX = "recipes";

interface IUser {
   username: string;
   password: string;
}

export const getAllUsers = async () => {
   try {
      const response = await fetch(BASE_URL + USERS_PREFIX);
      if (!response.ok) {
         throw new Error("Failed request: getAllUsers");
      }
      const data = await response.json();
      console.log(data);
      // dispatch data
   } catch (error: any) {
      console.log(error.message);
   }
};

export const createUser = async (user: IUser) => {
   try {
      const response = await fetch(BASE_URL + USERS_PREFIX, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      });

      if (!response.ok) {
         throw new Error("Failed request: createUser");
      }
      const data = await response.json();
      console.log(data);
      // dispatch data
   } catch (error: any) {
      console.log(error.message);
   }
};
