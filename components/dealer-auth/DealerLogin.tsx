// import { useQueryClient } from "@tanstack/react-query";
import Image from "next/future/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AppButton, AppInputLabel } from "../index";

function DealerLogin() {
  // const queryClient = useQueryClient();
  const [passwordShown, setPasswordShown] = useState<boolean>(false);

  // Password toggle handler
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <section
      className="flex items-center min-h-screen"
      style={{
        backgroundImage: "url(/images/login_bg.svg)",
        backgroundPosition: "100% center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex-1 h-full max-w-[1080px] mx-auto overflow-hidden bg-white rounded-2xl shadow-2xl">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="">
            <Image
              src="/images/login_main.svg"
              width={540}
              height={664}
              alt="Motion View"
            />
          </div>
          <form
            // onSubmit={handleSubmit(handleLogin)}
            className="flex items-center justify-center p-6 sm:p-12"
          >
            <div className="w-full">
              <h1 className="mb-2 text-4xl font-semibold text-black">
                Sign in
              </h1>
              <p className="text-xs text-[#B4B4B4]">
                welcome back! Please enter your credential to access your
                account.
              </p>
              <div className="mt-4">
                <div className="w-full">
                  <AppInputLabel
                    className="text-xs"
                    labelTitle="Email address or Phone"
                  />
                  <input
                    {...register("email", {
                      required: "Required email or phone",
                      pattern: {
                        value:
                          "^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})|(^[0-9]{10})+$",
                        message:
                          "Entered value does not match email or phone format",
                      },
                    })}
                    // onInput={(e) => setUserid(e.target.value)}
                    className="text-gray-900 text-sm rounded-md focus:border-yellow-500 outline-none w-full h-[50px] p-3 border-2 border-[#B4B4B4]"
                    type="text"
                    placeholder="Enter your email or phone(ex:01925460460)"
                  />
                </div>
                {errors.email && (
                  <span className="text-red-600 text-xs" role="alert">
                    {errors.email.message}
                  </span>
                )}
                <div className="mt-4">
                  <AppInputLabel
                    className="text-xs"
                    labelTitle="Set Password"
                  />
                  <div className="relative">
                    <input
                      {...register("password", {
                        required: "Required password",
                        minLength: {
                          value: 5,
                          message: "Password min length is 5",
                        },
                      })}
                      // onInput={(e) => setPassword(e.target.value)}
                      className="text-gray-900 text-sm rounded-md focus:border-yellow-500 outline-none w-full h-[50px] p-3 border-2 border-[#B4B4B4]"
                      type="text"
                      placeholder="Enter password"
                    />
                    <div
                      onClick={togglePassword}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                    >
                      {passwordShown ? (
                        <AiOutlineEyeInvisible size={20} />
                      ) : (
                        <AiOutlineEye size={20} />
                      )}
                    </div>
                  </div>
                </div>
                {errors.password && (
                  <span className="text-red-600 text-xs" role="alert">
                    {errors.password.message}
                  </span>
                )}
                <div className="flex justify-between items-center mt-3">
                  <div className="flex justify-start items-center">
                    <input
                      name="policy"
                      id="checkbox"
                      type="checkbox"
                      className="relative peer z-20 text-purple-600 rounded-md focus:ring-0"
                    />
                    <label
                      htmlFor="checkbox"
                      className="text-xs ml-1 font-semibold text-black"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="text-xs font-semibold text-red-600">
                    Forget password?
                  </div>
                </div>

                <AppButton
                  btnText="Processing"
                  type="submit"
                  className="animate-pulse bg-blue-700 text-white mt-6 h-12 w-full"
                />

                {/* {isLoading ? (
                  <AppButton
                    btnText="Processing"
                    type="submit"
                    className="animate-pulse bg-blue-700 text-white mt-6 h-12 w-full"
                  />
                ) : (
                  <AppButton
                    type="submit"
                    className="bg-blue-700 text-white mt-6 h-12 w-full"
                    btnText="Sign in"
                  />
                )} */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default DealerLogin;
