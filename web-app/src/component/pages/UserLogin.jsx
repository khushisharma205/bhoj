import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function UserLogin() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async(e)=>{
    e.preventDefault();

    try{

      const res = await fetch("http://localhost:5001/api/auth/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email,
          password
        })
      })

      const data = await res.json()

      if(data.token){
        localStorage.setItem("userToken",data.token)
        navigate("/")
      }else{
        alert(data.message)
      }

    }catch(error){
      console.log(error)
    }
  }

  return (

    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-rose-100 via-purple-100 to-amber-100">

      <div className="bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-[380px] border border-white">

        <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Login to continue your shopping
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition transform shadow-md"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6 text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-pink-500 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>

      </div>

    </div>
  );
}