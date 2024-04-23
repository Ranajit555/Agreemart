import Layout from "../components/Layout";
import { useDispatch } from "react-redux";

const Gallery_data = [
  {
    id: 1,
    name: "Rice",
    img_01: "/image/p_gallery/rice_g01.jpeg",
    img_02: "/image/p_gallery/rice_g02.jpg",
  },
  {
    id: 2,
    name: "Wheat",
    img_01: "/image/p_gallery/wheat_g01.jpg",
    img_02: "/image/p_gallery/millet_g02.jpeg",
  },
  {
    id: 3,
    name: "Millet",
    img_01: "/image/p_gallery/millet_g01.jpg",
    img_02: "/image/p_gallery/millet_g02.jpeg",
  },
];

const Product_gallery = () => {
  return (
      <div className=" my-[2%]">
        <div className="space-y-[2%]">
          {Gallery_data.map((item) => (
            <div className="">
              <div className="h-auto max-w-6xl ml-[8%] border rounded-[5px]">
                <h1 className="text-[30px] ml-[10px]">{item.name}</h1>
                <div className="ml-[10px] mb-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illum facere suscipit nulla sapiente doloremque delectus, itaque aliquid ullam dolorum magni praesentium rem quia magnam doloribus fugit vel minima tempora.</div>
                <div className="flex space-x-[1.5%] ml-[1%] mb-[1%]">
                  <div id="image section ">
                    <img className="h-[30vh] w-[50vh]" src={item.img_01} />
                  </div>
                  <div id="image section ">
                    <img className="h-[30vh] w-[50vh]" src={item.img_02} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};
export default Product_gallery;
