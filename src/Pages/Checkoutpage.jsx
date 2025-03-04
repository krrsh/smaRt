import React from "react";
import { useNavigate } from "react-router-dom";

const Checkoutpage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-fit m-auto border-2 lg:mt-15 mt-4 p-20 lg:p-50 gap-10 shadow-2xl">
      <div className="text-xl lg:text-3xl font-ubuntu font-bold text-green-600">
        The Order has been Placed !
      </div>
      <button
        className="bg-gray-400 p-2 lg:p-4 lg:text-2xl font-bold rounded hover:bg-gray-500 cursor-pointer transition-transform hover:scale-105 delay-100  ease-in-out transform"
        onClick={() => navigate("/")}
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default Checkoutpage;
