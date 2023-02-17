import { TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
   username: string;
   password: string;
};

const RegistrationForm: React.FC = () => {
   const { handleSubmit, register } = useForm<Inputs>();

   const onSubmit: SubmitHandler<Inputs> = ({ username, password }) => {
      console.log("Form submitted");
      console.log(username);
      console.log(password);
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <TextField type="text" {...register("username")} />
         <TextField type="text" {...register("password")} />
         <button type="submit">Submit</button>
      </form>
   );
};

export default RegistrationForm;
