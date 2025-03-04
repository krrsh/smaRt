import React, { useContext } from "react";
import search from "../assets/search.png";
import burger from "../assets/hamburger.png";
import profile from "../assets/profile.jpg";
import { useState } from "react";
import { searchitem } from "../Redux/Slice";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ProfileContext } from "../App";

const Navbar = () => {
  const { user } = useContext(ProfileContext);
  const [visibility, setVisibility] = useState(false);
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        dispatch(searchitem(text));
      }, 5);
    } else {
      dispatch(searchitem(text));
    }
  };

  const handleVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="p-5 min-w-fit bg-zinc-600 flex justify-between items-center h-20 gap-x-3">
          <h1
            onClick={() => navigate("/")}
            className="font-ubuntu cursor-pointer hover:text-white/80 font-bold text-2xl  sm:text-4xl"
          >
            smaRt
          </h1>
          <div className="flex items-center min-w-56 w-1/2">
            <input
              value={text}
              onChange={handleChange}
              className="bg-white w-full outline-0 px-2 py-1 rounded-l-sm"
              type="text"
              placeholder="Search"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleClick();
                }
              }}
            />
            <img
              onClick={handleClick}
              className="size-8 bg-white cursor-pointer rounded-r-sm outline-0"
              src={search}
              alt="searchIcon"
            />
          </div>

          <ul className="font-mono hidden md:flex gap-5">
            <li
              className="cursor-pointer hover:text-amber-50"
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className="cursor-pointer hover:text-amber-50"
              onClick={() => navigate("/cart")}
            >
              Cart
            </li>
            <li
              className="cursor-pointer hover:text-amber-50"
              onClick={() => navigate("/profile")}
            >
              Profile
            </li>
          </ul>

          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate("/profile")}
          >
            <img className="size-8 rounded-full" src={profile} alt="profile" />
            <div className="font-semibold">{user.name || "Guest"}</div>
          </div>

          <img
            onClick={handleVisibility}
            className="md:hidden block size-5 cursor-pointer"
            src={burger}
            alt="burgerIcon"
          />
        </div>
        {visibility && (
          <div className="md:hidden h-auto bg-zinc-200">
            <ul className="cursor-pointer flex flex-col justify-center items-center">
              <li
                onClick={() => navigate("/")}
                className="cursor-pointer hover:bg-zinc-300 border-y-2 p-1 w-full text-center"
              >
                Home
              </li>
              <li
                onClick={() => navigate("/cart")}
                className="cursor-pointer hover:bg-zinc-300 p-1 border-b-2 w-full text-center"
              >
                Cart
              </li>
              <li
                onClick={() => navigate("/profile")}
                className="cursor-pointer hover:bg-zinc-300 p-1 border-b-2 w-full text-center"
              >
                Profile
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
