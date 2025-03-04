import React from "react";
import Navbar from "../Components/Navbar";
import Card from "../Components/card";
import CartSummary from "../Components/CartSummary";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Redux/Slice";

const Homepage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.searcheditems);
  const addedproducts = useSelector((state) => state.products.addeditems);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        dispatch(setProducts(response.data));
        setLoading(false);
      })
      .catch((error) => {
        setError(
          "Failed to load the products! Please refresh or try again later!"
        );
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <>
        <h1 className="text-center font-ubuntu text-2xl font-bold text-black mt-[20%]">
          Loading...
        </h1>
      </>
    );
  if (error)
    return (
      <>
        <h1 className="text-center font-ubuntu text-4xl font-bold text-red-500 mx-[25%] mt-[15%]">
          {error}
        </h1>
      </>
    );

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex flex-wrap justify-center">
          {products.length ? (
            products.map((item) => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  price={item.price}
                  title={item.title}
                />
              );
            })
          ) : (
            <div className="flex justify-center items-center  text-3xl text-red-700 font-bold">
              No products available!
            </div>
          )}
        </div>
        {addedproducts[0] && <CartSummary addedproducts={addedproducts} />}
      </div>
    </div>
  );
};

export default Homepage;
