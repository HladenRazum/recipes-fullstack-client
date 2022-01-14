import * as yup from "yup";
export const SUPPORTED_FORMATS = "image/png, image/jpeg";

export const recipesValidationSchema = yup.object({
   name: yup.string().required("Name is required"),
   recipe_img: yup
      .mixed()
      .nullable()
      .required()
      .test(
         "FILE_SIZE",
         "Uploaded file's size is too big.",
         (value) => !value || (value && value.size <= 1024 * 1024)
      )
      .test(
         "FILE_FORMAT",
         "Uplaoded file has unsupported format.",
         (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
      ),
   instructions: yup
      .string()
      .required("Instructions are required")
      .min(3, "Instructions must be at least 20 characters long"),
});