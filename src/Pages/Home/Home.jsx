import React from "react";
import { userDP } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
const Home = () => {

  const loggedInUser = JSON.parse(localStorage.getItem('userCredentials'))
  const navigate = useNavigate();

  const logout = async () =>{
    toast.loading('logging out....' , {theme : 'dark'})
    await new Promise((resolve)=>{
      setTimeout(() => {
        resolve()
      }, 1500);
    }).then(()=>{
      toast.dismiss()
      toast.success('Logged out successfully' , {theme : 'dark'})
      localStorage.clear()
      navigate('/auth/login')
    }).catch((error)=>{
      toast.dismiss();
      toast.error(error.message , {theme : 'dark'})
    })
  }

  return (
    <div className="flex items-center justify-center h-screen bg-slate-100" >
      <div className="md:w-[20vw] w-[80vw]" >
        <header>
          <p className="text-[36px] font-[500] text-center leading-6" >Welcome to</p>
          <h1 className="text-[#6358DC] text-[44px] font-[900] text-center" >unstop</h1>
        </header>

        <main className="border mt-20 rounded-xl bg-white shadow-md py-6 w-full">
          {/* dp of the user  */}
          <img className="mx-auto" src={userDP} alt="" />

          {/* full name of the user */}
          <div className="flex justify-center gap-2 mt-4" >
          <h3 className="text-center text-[#6358DC] font-[600] text-xl" >{loggedInUser.firstname}</h3>
          <h3 className="text-center text-[#6358DC] font-[600] text-xl" >{loggedInUser.lastname}</h3>
          </div>

          {/* user details */}
          <div className="mt-4 text-[#383838]" >
          <p className="text-sm text-center font-[500]" >{loggedInUser.mail}</p>
          <p className="text-sm text-center font-[500] capitalize" >{loggedInUser.gender}</p>
          </div>

        <div className="flex justify-center mt-5" >
        <button onClick={logout} className="bg-[#6358DC] text-white rounded-[16px] px-6 py-3">Logout</button>
        </div>
        </main>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Home;
