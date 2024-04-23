import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../state/productSlice";
import { Link } from "react-router-dom";
import Topbar from "./Topbar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");   
  const dispatch = useDispatch();
  const nevigate=useNavigate();

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    dispatch(setSearchQuery(searchInput));
    setSearchInput('');
    nevigate('/sp');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      handleSearch();
       
    }
  };

  return (
    <>
      <header id="header" className="flex h-[65%] w-screen bg-[rgb(0,155,0)] items-center ">
        <Link to="/" className="ml-[2%] rounded-l-[80px] rounded-r-[80px] hover:bg-[rgb(12,25,103,0.4)]">
          <span className="flex items-center m-2 1 2 1">
            <p className="text-[25px]">Agreemart</p>
            <div id="img_container" className="w-[30px]">
              <img src="/image/logo_04.jpeg" className="h-[30px] w-[30px] ml-[4px] rounded-[10px]"></img>
            </div>
          </span>
        </Link>

        <Link to="/services" className="ml-[2%] rounded-l-[80px] rounded-r-[80px] hover:bg-[rgb(12,25,103,0.4)]" href="https://www.walmart.com/">
          <span className="flex items-center m-2 1 2 1">
            <div id="servicesLogo" className="">
              <div className="h-[3px] w-[15px] bg-[rgb(0,155,0)] border mb-[2px]"></div>
              <div className="h-[3px] w-[15px] bg-[rgb(0,155,0)] border mb-[2px]"></div>
              <div className="h-[3px] w-[15px] bg-[rgb(0,155,0)] border "></div>
            </div>
            <div></div>
            <p className="text-[17px] ml-[7px]">Services</p>
          </span>
        </Link>

        <Link to="/product_gallery" className="ml-[2%] rounded-l-[80px] rounded-r-[80px] hover:bg-[rgb(12,25,103,0.4)]" href="https://www.walmart.com/">
          <span className="flex items-center m-2 1 2 1">
            <div id="DepartmentLogo" className="flex mr-[7px]">
              <div id="1st_row">
                <div className="h-[8px] w-[8px] bg-[rgb(0,155,0)] border mb-[2px] mr-[2px]"></div>
                <div className="h-[8px] w-[8px] bg-[rgb(0,155,0)] border mb-[2px]"></div>
              </div>
              <div id="2nd_row">
                <div className="h-[8px] w-[8px] bg-[rgb(0,155,0)] border mb-[2px] mr-2[px]"></div>
                <div className="h-[8px] w-[8px] bg-[rgb(0,155,0)] border mb-[2px]"></div>
              </div>
            </div>
            <p className="text-[17px]">
              Product<span className="mr-2"></span>Gallery
            </p>
          </span>
        </Link>
        <form className="ml-[2%] w-[100%]">
          <div className="flex relative h-[40px] w-[100%] rounded-l-[80px] rounded-r-[80px] bg-white items-center">
            <input type="text" placeholder="Search" value={searchInput} onChange={handleInputChange} onKeyDown={handleKeyPress} className=" h-[40px] w-[100%] bg-white text-black rounded-l-[80px] rounded-r-[80px] pr-[10%] pl-[4%]"></input>
           <button onClick={handleSearch} id="search_icon" className="absolute right-3">
              <Link to={"/sp"}>
                <img src="https://www.svgrepo.com/show/356535/search-button.svg" className="ml-[5px] h-[15px] w-[15px]"></img>
              </Link>
            </button>
          </div>
        </form>
        <nav className="ml-[3%] mr-[1%] w-[70%]">
          <ul className="flex justify-center space-x-[15%]">
            <Link to="/blog" className="rounded hover:bg-[rgb(12,25,103,0.4)] hover:text-yellow-200 px-[1%]">Blog</Link>
            <Link  to="/login" className="rounded hover:bg-[rgb(12,25,103,0.4)] hover:text-yellow-200 px-[1%]">sign in</Link>
            <Link to="/cart" className="rounded hover:bg-[rgb(12,25,103,0.4)] hover:text-yellow-200 px-[1%]">your cart</Link>
          </ul>
        </nav>  
      </header>
      <hr className="w-auto mr-[15px]" />
      <div id="topbar" className="h-[30%] w-auto bg-[rgb(0,155,0)]">
        <Topbar />
      </div>
    </>
  );
};
export default Header;
