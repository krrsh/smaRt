import React from "react";
import Navbar from "../Components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAddeditems } from "../Redux/Slice";

const Productdetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleclick = ({ price, image, id, title }) => {
    dispatch(setAddeditems({ price, image, id, title }));
  };

  // Get products from Redux store
  const products = useSelector((state) => state.products.items);

  // Find the specific product
  const product = products.find((item) => item.id.toString() === id);

  // Get the addeditems
  const addedproducts = useSelector((state) => state.products.addeditems);
  const added = addedproducts.some((item) => item.id === product.id);
  const addedproduct = addedproducts.find((item) => item.id.toString() === id);

  // Handle missing product
  if (!product) return <h1>Product Not Found</h1>;

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-around py-10">
        <img
          className="sm:size-120 size-60 mx-auto"
          src={product.image}
          alt="Product"
        />
        <div className="flex flex-col gap-10 mt-10 sm:mt-0 mx-auto w-120 divide-y-2 divide-gray-300">
          <h1 className="text-3xl font-bold font-ubuntu">{product.title}</h1>
          <p className="pb-5 text-lg">{product.description}</p>
          <p className="text-2xl font-bold pb-5">
            $ {product.price}{" "}
            <span className="text-sm font-normal">
              ($ {product.price} / count)
            </span>
            <br />
            <span className="text-lg font-light">Inclusive of all taxes</span>
          </p>

          {added ? (
            <button onClick={() => navigate("/cart")} className="btn">
              {" "}
              <span className="mx-5">
                Added Quantity : {addedproduct.quantity}{" "}
              </span>{" "}
              Go to cart &gt;
            </button>
          ) : (
            <button className="btn" onClick={() => handleclick(product)}>
              Add to cart
            </button>
          )}
          <button className="btn" onClick={() => navigate("/")}>
            Go back to Home
          </button>

          <h1 className="border-gray-300 border-t-2 text-2xl pt-5 font-ubuntu text-gray-800">
            Rating : {product.rating.rate} ({product.rating.count})
          </h1>
        </div>
      </div>
    </>
  );
};

export default Productdetails;
