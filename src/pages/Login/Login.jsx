import { useMutation } from "@tanstack/react-query";
import { api } from "../../api/api";
import { useForm } from "react-hook-form";
import { message } from "antd";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate, isPending } = useMutation({
    mutationKey: ["LOGIN"],
    mutationFn: (data) => api.post("/users/login", data),
    onSuccess: (data) => {
      localStorage.setItem("CMS_USER", JSON.stringify(data.user));
      window.location.href = "/";
    },
    onError: (error) => {
      message.error(error.response.data.message);
      console.error(error);
    },
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute w-0.5 bg-black h-screen -rotate-45 -top-[16%] right-0"></div>
      <div className="absolute w-2.5 bg-black h-screen -rotate-45 -top-[24%] right-[10%]"></div>

      <div className="absolute w-0.5 bg-black h-screen -rotate-45 -bottom-[16%] left-0"></div>
      <div className="absolute w-2.5 bg-black h-screen -rotate-45 -bottom-[24%] left-[10%]"></div>

      <div className="mb-8">
        <img src="/logo.svg" alt="Logo" className="h-[60px]" />
      </div>

      <form action="" className="w-[300px]" onSubmit={handleSubmit(mutate)}>
        <div className="mb-5">
          <div className="border rounded-sm h-[45px] px-3 flex items-center gap-x-3">
            <img src="/icons/user.svg" alt="Icon" />

            <input
              type="text"
              placeholder="USERNAME"
              className="h-full w-full outline-none placeholder:text-black"
              {...register("email", {
                required: "Vui lòng nhập email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Email không đúng định dạng",
                },
              })}
            />
          </div>

          {errors?.email?.message && (
            <p className="text-sm text-red-500 mt-0.5">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <div className="border rounded-sm h-[45px] px-3 flex items-center gap-x-3">
            <img src="/icons/lock.svg" alt="Icon" />

            <input
              type="password"
              placeholder="PASSWORD"
              className="h-full w-full outline-none placeholder:text-black"
              {...register("password", {
                required: "Vui lòng nhập mật khẩu",
              })}
            />
          </div>

          {errors?.password?.message && (
            <p className="text-sm text-red-500 mt-0.5">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-black w-full h-[45px] rounded-sm mt-11 text-white cursor-pointer [&:disabled]:bg-gray-300"
          disabled={isPending}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
