import React, { useContext, useState } from "react";
import Navbar from "../Components/Navbar";
import { ProfileContext } from "../App";

const Profilepage = () => {
  const { setUser } = useContext(ProfileContext);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handlechange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    setUser(userInput);
    setUserInput({
      name: "",
      email: "",
      address: "",
    });
  };

  return (
    <>
      <h1 className="mt-20 text-center text-3xl font-bold text-cyan-800">
        Update your Profile
      </h1>
      <form className="flex flex-col gap-10 border-2 p-10 mt-20 sm:w-[50%] mx-2 sm:mx-auto shadow-2xl items-center">
        <input
          onChange={handlechange}
          value={userInput.name}
          className="border-1 w-full bg-cyan-50 p-2 rounded"
          name="name"
          type="text"
          placeholder="Enter the name"
          required
        />
        <input
          onChange={handlechange}
          value={userInput.email}
          className="border-1 w-full bg-cyan-50 p-2 rounded"
          name="email"
          type="email"
          placeholder="Enter the Email"
          required
        />
        <input
          onChange={handlechange}
          value={userInput.address}
          className="border-1 w-full bg-cyan-50 p-2 rounded"
          name="address"
          type="text"
          placeholder="Enter the Address"
          required
        />
        <button
          onClick={handleClick}
          className="bg-cyan-600 rounded w-[30%] cursor-pointer hover:bg-cyan-700 p-2"
        >
          Update
        </button>
      </form>
    </>
  );
};

export default Profilepage;
