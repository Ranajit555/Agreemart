import { useSelector, useDispatch } from "react-redux";
import { addItemcart } from "../state/cartSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductShowPage = () => {
  const [isPresentIncart, setIsPresentIncart] = useState(false);
  const [singleItem, setSingleItem] = useState([]);
  const myitemId = useSelector((state) => state.items.selectedItem);
  const cartItempresent = useSelector((state) => state.cartproduct.cartItem);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/food/");
        const allData = response.data;
        const selectedIdItem = allData.find((product) => product.id === myitemId);
        setSingleItem(selectedIdItem);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [myitemId]);

  useEffect(() => {
    const myfunc01 = () => {
      const falg = cartItempresent.find((Item) => Item.id === singleItem.id);
      if (falg !== undefined) {
        setIsPresentIncart(true);
      }
    };
    myfunc01();
  });

  const handleAddToCart = () => {
    dispatch(addItemcart(singleItem));
  };

  if (myitemId != singleItem.id) {
    return <div>Product is not found</div>;
  }
  return (
    <div className="max-w-[80%] mx-auto">
      <div className="flex mt-[5%] justify-center">
        <div className="flex border h-[50vh] w-[75vh] justify-center items-center">
          <img src={singleItem.image} alt={singleItem.name} className="rounded-md h-[85%] w-[60%]" />
        </div>
        <div className=" flex bg-white shadow-md p-6 border rounded-md ml-[2%] w-[45%] ">
          <div className="ml-[10%]">
            <h1 className="text-xl font-bold mb-4">{singleItem.name}</h1>
            <p className="text-gray-800 font-semibold text-lg mb-4">Price: Rs-{singleItem.price}</p>
            <div className="py-2 mb-4">
              <button className="bg-red-200 text-red-600 font-semibold px-4 py-2 rounded hover:bg-green-200">Get Offrer</button>
            </div>
            {!isPresentIncart ? (
              <button onClick={handleAddToCart} className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            ) : (
              <Link to="/cart">
                <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">go to Cart</button>
              </Link> 
            )}
          </div>
        </div>
      </div>
      <div className="mx-auto w-[95%] my-[5%] justify-center border rounded-md shadow-md">
        <div className="ml-[2%]">
          <p>Product details-</p>
          <p className="text-gray-700 mb-4">{singleItem.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis velit molestiae molestias nemo odio, pariatur dolores earum quibusdam harum dolor ipsam suscipit modi laboriosam excepturi est, numquam culpa. Molestias, illo?</p>
        </div>
      </div>
    </div>
  );
};
export default ProductShowPage;
