import React from "react";
import { increment, decrement } from "../Redux/Slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartSummary = () => {

  const dispatch = useDispatch();
  const addedproducts = useSelector((state) => state.products.addeditems);
  const navigate = useNavigate();

  return (
    <div className="border-2 mr-4 mt-20 h-fit">
      <div className="overflow-y-auto h-68">
        {addedproducts.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col justify-center items-center p-5 border-b-1"
            >
              <img
                className="size-30 cursor-pointer"
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
                    className="hover:bg-zinc-300 border-1 px-2 cursor-pointer"
                  >
                    -
                  </button>
                  <span className="px-2 bg-neutral-400 border-y">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => dispatch(increment({ id: item.id }))}
                    className="hover:bg-zinc-300 border-1 px-2 cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
              <p className=" mt-4">
                Total price : ${item.quantity * item.price}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-2 justify-center border-t-2 py-4 items-center">
        <p>
          Total Items :{" "}
          {addedproducts.reduce((acc, item) => acc + item.quantity, 0)}
        </p>
        <p>
          Total Price: ${" "}
          {addedproducts
            .reduce((acc, item) => acc + item.price * item.quantity, 0)
            .toFixed(2)}
        </p>
        <button onClick={() => navigate("/cart")} className="btn">
          Go to Cart
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
