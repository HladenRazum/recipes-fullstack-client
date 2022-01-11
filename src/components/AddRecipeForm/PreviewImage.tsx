import React from "react";

interface Props {
   file: Blob;
}

const PreviewImage = (props: Props) => {
   const [preview, setPreview] = React.useState<string | null>(null);

   const reader = new FileReader();
   if (!props.file) {
      setPreview(null);
   }
   reader.readAsDataURL(props.file);
   reader.onload = () => {
      if (!reader.result) {
         return;
      }
      setPreview(reader.result as string);
   };

   return (
      <div>
         <img
            style={{
               margin: "1em 0",
            }}
            src={preview as string}
            alt="preview"
            width="212px"
            height="120px"
         />
      </div>
   );
};

export default PreviewImage;
