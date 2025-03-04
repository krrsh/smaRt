import React from "react";
import { increment, decrement, removeitem, checkout } from "../Redux/Slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cartpage = () => {
  const dispatch = useDispatch();
  const addedproducts = useSelector((state) => state.products.addeditems);
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(checkout());
    navigate("/checkout");
  };

  return (
    <div className="font-ubuntu border-2 mx-4 mt-1 flex flex-col sm:flex-row justify-between items-center w-full h-[800px] sm:h-[650px]">
      {addedproducts.length > 0 ? (
        <>
          <div className="overflow-y-auto h-[50%] sm:h-[100%] w-[auto] sm:w-[50%] flex flex-col justify-between bg-gray-200">
            {addedproducts.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-center items-center h-[100%] p-5 border-b-1"
              >
                <img
                  className="size-40 sm:size-60 cursor-pointer"
                  onClick={() => navigate(`/product/${item.id}`)}
                  src={item.image}
                  alt="product_image"
                />
                <p
                  className="line-clamp-1 mt-1 cursor-pointer hover:text-sky-700"
                  onClick={() => navigate(`/product/${item.id}`)}
                >
                  {item.title}
                </p>
                <div className="flex gap-4 mt-4">
                  <p>Quantity</p>
                  <div className="flex">
                    <button
                      onClick={() => dispatch(decrement({ id: item.id }))}
                      className="hover:bg-zinc-300 border-1 px-2 h-fit cursor-pointer"
                    >
                      -
                    </button>
                    <span className="px-2 bg-neutral-400 border-y h-fit">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => dispatch(increment({ id: item.id }))}
                      className="hover:bg-zinc-300 border-1 px-2 h-fit cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => dispatch(removeitem({ id: item.id }))}
                    className="text-xs h-fit text-center font-ubuntu px-2 py-1 cursor-pointer hover:bg-zinc-600 hover:text-white/80 bg-zinc-500 transition-transform hover:ease-in-out duration-400 hover:scale-105 shadow-[0px_4px_10px_rgba(0,0,0,0.4)] hover:shadow-[0px_6px_15px_rgba(0,0,0,0.6)]"
                  >
                    Remove item
                  </button>
                </div>
                <p className=" mt-4">
                  Total price :{" "}
                  <span className="font-bold">
                    ${item.quantity * item.price}
                  </span>
                </p>
              </div>
            ))}
          </div>
          <div className="h-[100%] w-[70%] flex flex-col gap-5 sm:gap-8 sm:justify-center justify-start sm:py-4 py-10 items-center">
            <p className="text-xl sm:text-2xl">
              Total Items :{" "}
              <span className="font-bold text-2xl sm:text-3xl">
                {" "}
                {addedproducts.reduce(
                  (acc, item) => acc + item.quantity,
                  0
                )}{" "}
              </span>{" "}
            </p>
            <p className="text-xl sm:text-2xl">
              Total Price:{" "}
              <span className="font-bold text-2xl sm:text-3xl">
                {" "}
                ${" "}
                {addedproducts
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}{" "}
              </span>
            </p>
            <button className="checkoutbtn" onClick={() => navigate("/")}>
              Add more items &gt;
            </button>
            <button className="checkoutbtn" onClick={handleClick}>
              Checkout &gt;
            </button>
          </div>
        </>
      ) : (
        <div className=" m-auto flex flex-col gap-10">
          <div className="font-ubuntu font-semibold text-3xl text-red-400">
            No Products Added
          </div>
          <button className="checkoutbtn" onClick={() => navigate("/")}>
            Start Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cartpage;
