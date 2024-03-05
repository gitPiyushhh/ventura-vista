import React from "react";

const FormInput = () => {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-stone-700">
        Write company name which you are applying ?
      </span>
      <textarea name="random" cols="30" rows="4" className="p-4 px-4 bg-transparent border-[1px] border-stone-400 rounded-lg text-stone-600">
        
      </textarea>
    </div>
  );
};

export default FormInput;
