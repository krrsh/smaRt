import React from "react";
import { setAddeditems } from "../Redux/Slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const card = ({ image, title, price, id }) => {
  const dispatch = useDispatch();

  const addeditems = useSelector((state) => state.products.addeditems);
  const addeditem = addeditems.find((item) => item.id === id);

  const handleclick = ({ price, image, id, title }) => {
    dispatch(setAddeditems({ price, image, id, title }));
  };

  const navigate = useNavigate();
  return (
    <div className=" p-5" id={id}>
      <div className="flex flex-col justify-between font-sans bg-neutral-300 border-1 h-90 w-52 pb-4 pt-1 shadow-[0px_4px_10px_rgba(0,0,0,0.4)]">
        <img
          className="size-50 cursor-pointer mx-1"
          src={image}
          alt="product_image"
          onClick={() => navigate(`/product/${id}`)}
        />
        <h4
          onClick={() => navigate(`/product/${id}`)}
          className="hover:text-sky-700 cursor-pointer line-clamp-2 px-2 pt-2 font-ubuntu"
        >
          {title}
        </h4>
        <h6 className="px-2 text-xl font-medium">$ {price}</h6>
        {!addeditem ? (
          <div className="flex justify-center mt-2">
            <button
              onClick={() => handleclick({ price, image, id, title })}
              className="btn"
            >
              Add to cart
            </button>
          </div>
        ) : (
          <div className="flex justify-center mt-2">
            <button
              className="btn !bg-slate-600"
              onClick={() => navigate("/cart")}
            >
              Go to cart &gt;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default card;
