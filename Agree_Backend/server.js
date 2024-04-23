import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("this is home page");
});
app.get("/api/food", (req, res) => {
  const food = [
    {
      id: 1,
      type: "demo_img",
      name: "Product 1",
      description: "Description for Product 1.",
      price: 19.99,
      image: "/image/rice.jpg",
      style_h: 70,
      style_w: 20,
      link: "/pi",
    },
    {
      id: 2,
      type: "demo_img",
      name: "Product 2",
      description: "Description for Product 2.",
      price: 29.99,
      image: "/image/agree_03.jpg",
      style_h: 40,
      style_w: 20,
      link: "/pi",
    },
    {
      id: 3,
      type: "demo_img",
      name: "Product 3",
      description: "Description for Product 3.",
      price: 29.99,
      image: "/image/Atta_01.jpg",
      style_h: 40,
      style_w: 20,
      link: "/pi",
    },
    {
      id: 4,
      type: "dal",
      name: "Product 4",
      description: "Description for Product 4.",
      price: 29.99,
      image: "/image/dal_01.jpg",
      style_h: 70,
      style_w: 20,
      link: "/pi",
    },
    {
      id: 5,
      type: "dal",
      name: "Product 5",
      description: "Description for Product 5.",
      price: 29.99,
      image: "/image/chola_01.jpg",
      style_h: 70,
      style_w: 20,
      link: "/pi",
    },
    {
      id: 6,
      type: "millet",
      name: "Product 6",
      description: "Description for Product 6.",
      price: 29.99,
      image: "/image/bajra_01.jpg",
      style_h: 70,
      style_w: 20,
      link: "/pi",
    },
    {
      id: 7,
      type: "millet",
      name: "Product 4",
      description: "Description for Product 4.",
      price: 29.99,
      image: "/image/millets_01.jpg",
      style_h: 70,
      style_w: 20,
      link: "/pi",
    },
    {
      id: 8,
      type:"wheat",
      name: "Product 7",
      description: "Description for Product 7.",
      price: 29.99,
      image: "/image/mustard_01.jpg",
      style_h: 70,
      style_w: 20,
      link: "/pi",
    },
    {
      id: 9,
      type:"dal",
      name: "Product 8",
      description: "Description for Product 8.",
      price: 29.99,
      image: "/image/dal_01.jpg",
      style_h: 70,
      style_w: 20,
      link: "/pi",
    },
    {
      id: 10,
      type:"dal",
      name: "Product 9",
      description: "Description for Product 9.",
      price: 29.99,
      image: "/image/chola_01.jpg",
      style_h: 70,
      style_w: 20,
      link: "/pi",
    },
    {
      id: 11,
      type:"millet",
      name: "Product 10",
      description: "Description for Product 10.",
      price: 29.99,
      image: "/image/bajra_01.jpg",
      style_h: 70,
      style_w: 20,
      link: "/pi",
    },
    {
      id: 12,
      type:"millet",
      name: "Product 11",
      description: "Description for Product 11.",
      price: 29.99,
      image: "/image/millets_01.jpg",
      style_h: 70,
      style_w: 20,
      link: "/pi",
    },
    {
      id: 13,
      type:"wheat",
      name: "Product 12",
      description: "Description for Product 12.",
      price: 29.99,
      image: "/image/mustard_01.jpg",
      style_h: 70,
      style_w: 20,
      link: "/pi",
    },
  ];
  res.send(food);
});
app.get("/api/service", (req, res) => {
  const service_data = [
    {
      id: 1,
      name: "membership",
    },
    {
      id: 2,
      name: "subscription",
    },
    {
      id: 2,
      name: "join our community",
    },
    {
      id: 2,
      name: "funancial services",
    },
  ];
  res.send(service_data);
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server is running");
});
