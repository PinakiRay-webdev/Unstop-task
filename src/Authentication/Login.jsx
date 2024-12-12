import React from "react";
import { facebook, google, key, loginImage, mail, user } from "../utils/utils";
const Login = () => {
  return (
    <div className="bg-[#F4F4F4] w-full h-fit">
      <div className="h-screen flex items-center justify-between px-[74px]">
        <img className="w-[540px] h-[540px]" src={loginImage} alt="" />

        {/* login section  */}
        <div className="h-[95vh] w-[40vw] bg-[#FFFFFF] rounded-[20px] px-4 py-6">
          <header>
            <p className="font-[500px] leading-3">Welcome to</p>
            <h1 className="font-[900] text-5xl text-[#6358DC]">Unstop</h1>
          </header>

          {/* social media section  */}
          <div className="mt-5">
            <div className="flex items-center justify-center gap-3 border border-[#E2E2E2] py-4 rounded-lg shadow cursor-pointer">
              <img
                className="w-7"
                src={google}
                loading="lazy"
                alt="google icon"
              />
              <p className="font-[500] text-sm">Login with google</p>
            </div>

            <div className="flex items-center justify-center gap-3 border border-[#E2E2E2] py-4 rounded-lg shadow cursor-pointer mt-2">
              <img
                className="w-3"
                src={facebook}
                loading="lazy"
                alt="google icon"
              />
              <p className="font-[500] text-sm">Login with facebook</p>
            </div>
          </div>

          {/* divider section  */}

          <div className="flex items-center gap-4 my-3">
            <div className="border border-[##E2E2E2] h-0 w-full"></div>
            <p className="font-[500]">or</p>
            <div className="border border-[##E2E2E2] h-0 w-full"></div>
          </div>

          {/* form section  */}
          <form>
            <fieldset className={`bg-[#F4F4F4] py-2 rounded-lg px-6`}>
              <div className="flex items-center gap-5">
                <img src={user} alt="" />
                <div className="w-full">
                  <label className="font-[400] text-[14px]">User Name</label>
                  <br />
                  <input
                    className="w-full py-1 bg-transparent outline-none font-[700] text-[15px]"
                    type="text"
                    placeholder="abc@example.com"
                  />
                </div>
              </div>
            </fieldset>

            <fieldset className={`bg-[#F4F4F4] py-2 rounded-lg px-6 my-3`}>
              <div className="flex items-center gap-5">
                <img src={mail} alt="" />
                <div className="w-full">
                  <label className="font-[400] text-[14px]">Email</label>
                  <br />
                  <input
                    className="w-full py-1 bg-transparent outline-none font-[700] text-[15px]"
                    type="text"
                    placeholder="abc@example.com"
                  />
                </div>
              </div>
            </fieldset>

            <fieldset className={`bg-[#F4F4F4] py-2 rounded-lg px-6`}>
              <div className="flex items-center gap-5">
                <img src={key} alt="" />
                <div className="w-full">
                  <label className="font-[400] text-[14px]">Password</label>
                  <br />
                  <input
                    className="w-full py-1 bg-transparent outline-none font-[700] text-[15px]"
                    type="password"
                    placeholder="abc@example.com"
                  />
                </div>
              </div>
            </fieldset>

            {/* remember me */}
            <div className="my-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p className="font-[500] text-sm">Remember me</p>
              </div>

              <p className="text-[#6358DC] text-sm" >Forgot Password ?</p>
            </div>

            {/* submit button for form  */}
            <button className="bg-[#6358DC] w-full py-3 rounded-lg text-white" >Login</button>
            <footer>
                <p className="text-center text-sm mt-3" >Don't have an account? <span className="text-[#6358DC] cursor-pointer" >Register</span></p>
            </footer>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
