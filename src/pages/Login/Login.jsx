const Login = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute w-0.5 bg-black h-screen -rotate-45 -top-[16%] right-0"></div>
      <div className="absolute w-2.5 bg-black h-screen -rotate-45 -top-[24%] right-[10%]"></div>

      <div className="absolute w-0.5 bg-black h-screen -rotate-45 -bottom-[16%] left-0"></div>
      <div className="absolute w-2.5 bg-black h-screen -rotate-45 -bottom-[24%] left-[10%]"></div>

      <div className="mb-8">
        <img src="/logo.svg" alt="Logo" className="h-[60px]" />
      </div>

      <form action="" className="w-[300px]">
        <div className="mb-5">
          <div className="border rounded-sm h-[45px] px-3 flex items-center gap-x-3">
            <img src="/icons/user.svg" alt="Icon" />

            <input
              type="text"
              placeholder="USERNAME"
              className="h-full w-full outline-none placeholder:text-black"
            />
          </div>
        </div>

        <div>
          <div className="border rounded-sm h-[45px] px-3 flex items-center gap-x-3">
            <img src="/icons/lock.svg" alt="Icon" />

            <input
              type="password"
              placeholder="PASSWORD"
              className="h-full w-full outline-none placeholder:text-black"
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-black w-full h-[45px] rounded-sm mt-11 text-white cursor-pointer"
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
