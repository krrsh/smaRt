import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Productdetails from "./Pages/Productdetails";
import Cartpage from "./Pages/Cartpage";
import Checkoutpage from "./Pages/Checkoutpage";
import Profilepage from "./Pages/Profilepage";
import Navbar from "./Components/Navbar";

export const ProfileContext = createContext();

const App = () => {
  const [user, setUser] = useState({
    name: "Guest",
    email: "",
    address: "",
  });

  return (
    <ProfileContext.Provider value={{ user, setUser }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:id" element={<Productdetails />} />
          <Route path="/cart" element={<Cartpage />} />
          <Route path="/checkout" element={<Checkoutpage />} />
          <Route path="/profile" element={<Profilepage />} />
        </Routes>
      </Router>
    </ProfileContext.Provider>
  );
};

export default App;
