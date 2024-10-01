
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setPrevLocation(location.state?.data || "");
  }, [location]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`max-w-container mx-auto px-4 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      {/* Toggle button for Light/Dark Mode */}
      <div className="flex justify-end py-4">
        <button
          onClick={toggleTheme}
          className="bg-primeColor px-4 py-2 rounded-md text-white hover:bg-secondaryColor duration-300"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <Breadcrumbs title="Journals" prevLocation={prevLocation} />

      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">E-shop</span>{" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
          reiciendis delectus vitae, aliquid sit iure dolorum commodi eum
          numquam voluptate!
        </h1>

        <Link to="/shop">
          <button className="w-52 h-10 bg-[#7743DB] text-white hover:bg-[#00A9FF] rounded-sm hover:scale-105 duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Journal;
