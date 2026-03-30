import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try{

      const res = await fetch("http://localhost:5001/api/auth/admin/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email,
          password
        })
      });

      const data = await res.json();

      if(data.token){
        localStorage.setItem("adminToken",data.token);
        navigate("/admin/dashboard");
      }else{
        alert(data.message);
      }

    }catch(error){
      console.log(error);
    }

  };

  return (

    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100">

      <div className="bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl w-[380px] border border-white">

        <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">
          Admin Login
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            required
          />

          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition transform shadow-md"
          >
            Login
          </button>

        </form>

      </div>

    </div>

  );
}

export default AdminLogin;