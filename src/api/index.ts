
const url = "http://192.168.0.102:9000/api/recipes";

export const addNewRecipe = async (body: object) => {
   try {
      const response = await fetch(url, {

         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(body)
      });

      console.log(response);
      console.log(JSON.stringify(body));
   } catch (error) {
      console.log(error);
   }
};
