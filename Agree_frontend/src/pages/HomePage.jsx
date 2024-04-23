import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { selectItem } from "../state/itemSlice";


const images = ["image/agree_01.jpg", "image/agree_03.jpg","image/wheat_03.jpeg","image/wheat_04.jpeg"];
const interval = 1200;

const HomePage = () => {
  const [product_data, setProduct_data] = useState([]);
  const dispatch=useDispatch();

  useEffect(() => {
    axios
      .get("/api/food/")
      .then((response) => {
        setProduct_data(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(true);

  useEffect(() => {
    let intervalId;
    if (isSliding) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, interval);
    }
    return () => clearInterval(intervalId);
  }, [images.length, interval, isSliding]);

  const handleInteraction = () => {
    {
      isSliding ? setIsSliding(false) : setIsSliding(true);
    }
  };

  const nextimage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleProductPage=(productId)=>{
    dispatch(selectItem(productId));
  }
 
  return (
    <>
      <div id="product-list" className={`mt-[3%] flex flex-wrap justify-center aligne-item word-wrap space-x-[2.5%]`}>
        {product_data.map((product) =>
          product.id <= 3 ? (
            product.id == 2 ? (
              <div id="product_card" className={`h-[56vh] w-[50%] rounded-md mb-[2%] bg-blue-400`} style={{ backgroundImage: `url(${images[currentImageIndex]})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div  id="pause&nextbutton" className="flex-col">
                  <div>{}</div>
                  <div className="h-full mt-[46%]">
                    <button onClick={handleInteraction} className="text-white  bg-gray-700 px-4 py-2 hover:bg-gray-800">
                      {!isSliding && (
                        <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3l14 9-14 9V3z" />
                        </svg>
                      )}
                      {isSliding && (
                        <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                        </svg>
                      )}
                    </button>
                    <button onClick={nextimage} className="text-white  bg-gray-700 px-4 py-2 hover:bg-gray-800">
                      <svg className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div id="product_card" className={`h-[60vh] w-[20%] rounded-md mb-[2%] bg-blue-400`} style={{ backgroundImage: `url(${product.image})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            )
          ) : null || product.id >= 4 ? (
            <Link onClick={() => handleProductPage(product.id)} to={`${product.link}/${product.id}`} id="product_card" className="flex-col h-[60vh] w-[17%] border border-solid border-red-300 rounded-md mb-[2%] bg-blue-400">
              <div id="img_product" className="h-[70%] mb-[13%] w-[100%]">
                <img src={`${product.image}`} className="h-[100%] w-[100%]"></img>
              </div>
              <div className="h-[fit]">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Rs.{product.price}</p>
              </div>
            </Link>
          ) : null
        )}
      </div>
    </>
  );
};
export default HomePage;
