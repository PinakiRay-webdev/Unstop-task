import React , {useState} from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { facebook, google, key, loginImage, mail, user , eyeOpen , eyeClose } from "../utils/utils";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();


  const base_url = 'https://dummyjson.com/auth/login'
  const navigate = useNavigate()

  const getFormData = async (data) => {
    toast.loading('logging...' , {theme : 'dark'})
    try {
      new Promise((resolve)=>{
        setTimeout(() => {
          resolve()
        }, 1500);
      })
      const response = await axios.post(base_url , {
        username : data.username,
        password : data.password
      })
      toast.dismiss()
      toast.success('logged in successfully' , {theme : 'dark'})
      localStorage.setItem('userCredentials' , JSON.stringify({
        firstname : response.data.firstName,
        lastname : response.data.lastName,
        mail : data.mail, //here i am passing the user mail who logs in (E.G :- example@gmail.com) or we can also go for emilys's mail id.
        gender : response.data.gender,
        accessToken : response.data.accessToken
      }))
      
      setTimeout(() => {
        navigate('/home')
      }, 1000);
    } catch (error) {
      toast.dismiss()
      toast.error(error.message , {theme : 'dark'})
    }
  };

  //logic to toggle password visibily
   const [isPassVisible, setIsPassVisible] = useState(false)

   const togglePassVisibility = () =>{
    setIsPassVisible(!isPassVisible)
   }
  

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
          <form onSubmit={handleSubmit(getFormData)}>
            {/* in the label section i have added error message in terms of ternary operator so that the error message will display there if any errors comes otherwise the input label will show. */}

            {/* user name  */}
            <fieldset
              className={`bg-[#F4F4F4] py-2 border rounded-lg px-6 ${
                errors.username && "border-red-500"
              }`}
            >
              <div className="flex items-center gap-5">
                <img src={user} alt="" />
                <div className="w-full">
                  <label
                    className={`font-[400] text-[14px] ${
                      errors.username && "text-red-500"
                    }`}
                  >
                    {errors.username ? errors.username.message : "User Name"}
                  </label>
                  <br />
                  <input
                    {...register("username", {
                      required: {
                        value: true,
                        message: "User name is required",
                      },
                    })}
                    className="w-full py-1 bg-transparent outline-none font-[700] text-[15px]"
                    type="text"
                    placeholder="username"
                  />
                </div>
              </div>
            </fieldset>
            
            {/* user mail address  */}
            <fieldset
              className={`bg-[#F4F4F4] py-2 border rounded-lg px-6 my-3 ${
                errors.mail && "border-red-500"
              }`}
            >
              <div className="flex items-center gap-5">
                <img src={mail} alt="" />
                <div className="w-full">
                  <label
                    className={`font-[400] text-[14px] ${
                      errors.mail && "text-red-500"
                    }`}
                  >
                    {errors.mail ? errors.mail.message : "Email"}
                  </label>
                  <br />
                  <input
                    {...register("mail", {
                      required: {
                        value: true,
                        message: "Email address is required",
                      },
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
                        message: "Enter a valid mail address",
                      },
                    })}
                    className="w-full py-1 bg-transparent outline-none font-[700] text-[15px]"
                    type="text"
                    placeholder="abc@example.com"
                  />
                </div>
              </div>
            </fieldset>
            

            {/* user password  */}
            <fieldset
              className={`bg-[#F4F4F4] py-2 border rounded-lg px-6 ${
                errors.password && "border-red-500"
              }`}
            >
              <div className="flex items-center gap-5">
                <img src={key} alt="" />
                <div className="w-full">
                  <label
                    className={`font-[400] text-[14px] ${
                      errors.password && "text-red-500"
                    }`}
                  >
                    {errors.password ? errors.password.message : "Password"}
                  </label>
                  <br />
                  <input
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                      pattern: {
                        value: /^.{8,}$/,
                        message: "Password must have atleast 8 characters",
                      },
                    })}
                    className="w-full py-1 bg-transparent outline-none font-[700] text-[15px]"
                    type={isPassVisible ? "text" : "password"}
                    placeholder="***********"
                  />
                </div>

                {/* password visibility toggle button  */}
                <img onClick={togglePassVisibility} className="cursor-pointer" src={isPassVisible ? eyeClose : eyeOpen} alt="" />
              </div>
            </fieldset>

            {/* remember me */}
            <div className="my-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p className="font-[500] text-sm">Remember me</p>
              </div>

              <p className="text-[#6358DC] text-sm">Forgot Password ?</p>
            </div>

            {/* submit button for form  */}
            <button disabled={isSubmitting} className={`bg-[#6358DC] w-full py-3 rounded-lg text-white ${isSubmitting && "cursor-not-allowed opacity-60"}`}>
              {isSubmitting ? "Logging..." : "Login"}
            </button>

            {/* footer section for forgot password */}
            <footer>
              <p className="text-center text-sm mt-3">
                Don't have an account?{" "}
                <span className="text-[#6358DC] cursor-pointer">Register</span>
              </p>
            </footer>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
