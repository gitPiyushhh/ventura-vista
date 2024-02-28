import React from "react";
import Button from "../components/ui/Button";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Authentication = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => toast.success("Account created successfully");
  console.log(errors);

  return (
    <div className="bg-stone-900 w-screen h-screen flex items-center justify-center overflow-hidden relative">
      <ToastContainer />

      <img
        src="/graphics/background.svg"
        alt="Background_image"
        className="w-full h-full bg-center object-center !object-cover"
      />

      <div className="absolute left-4 top-[50%] translate-y-[-50%] ml-4 p-8 rounded flex flex-col gap-4">
        <span className="uppercase text-stone-100 text-md font-lg">
          start for free
        </span>
        <div className="flex">
          <h1 className="text-5xl font-bold text-stone-100 m-0 p-0">
            Create new account
          </h1>
          <h1 className="text-5xl font-bold text-cyan-500">.</h1>
        </div>

        <div className="flex space-x-2">
          <span className="text-stone-100">Already a member</span>
          <Button type={"link"}>Log in</Button>
        </div>

        {/* FORM */}

        <div className="flex flex-col">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="flex space-x-4 w-full">
              <input
                type="text"
                placeholder="First name"
                {...register("First name", { required: true, maxLength: 80 })}
                className="p-3 block w-[46%] focus:border-cyan-700 focus:border-2 border-2 border-transparent transition-all duration-300 rounded-lg bg-stone-600 text-stone-100 placeholder:text-stone-200 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last name"
                {...register("Last name", { required: true, maxLength: 100 })}
                className="p-3 block w-[54%] focus:border-cyan-700 focus:border-2 border-2 border-transparent transition-all duration-300 rounded-lg bg-stone-600 text-stone-100 placeholder:text-stone-200 focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Email"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
              className="p-3 rounded-lg focus:border-cyan-700 focus:border-2 border-2 border-transparent transition-all duration-300 bg-stone-600 text-stone-100 placeholder:text-stone-200 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Mobile number"
              {...register("Mobile number", {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
              className="p-3 rounded-lg focus:border-cyan-700 focus:border-2 border-2 border-transparent transition-all duration-300 bg-stone-600 text-stone-100 placeholder:text-stone-200 focus:outline-none"
            />

            <div className="bg-stone-600 w-full rounded-lg focus:border-cyan-700 focus:border-2 border-2 border-transparent transition-all duration-300">
              <select
                {...register("Title", { required: true })}
                className="p-3 block rounded-lg bg-stone-600 text-stone-100 placeholder:text-stone-200 focus:outline-none pr-8 w-[96%]"
              >
                <option value="Mr">Dev</option>
                <option value="Mrs">Designer</option>
                <option value="Miss">HR</option>
                <option value="Dr">Finance</option>
              </select>
            </div>

            <div className="flex space-x-4 justify-between items-center">
              <Button type="button" primary={false}>
                Signup with google
              </Button>
              <Button type="submit" primary={true}>
                Create account
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
