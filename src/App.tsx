import ProductCatalog from "./components/ProductCatalog/ProductCatalog";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import { CartType } from "./components/types/cart";

function App() {

  
  const products = [
    {
      id: 1,
      name: "Наручные часы мужские SKMEI 1251 Наручные часы мужские SKMEI 1251 Наручные часы мужские SKMEI 1251",
      imageUrl: "/watch.png",
      price: 8165,
      discount: 90,
      rating: 4.7,
      isFavorite: true,
      count: 0
    },
    {
      id: 2,
      name: "Ноутбук Apple Macbook Air M1 256 Гб",
      imageUrl: "/Mac.png",
      price: 94420,
      discount: 5,
      rating: 5.0,
      isFavorite: false,
      count: 0
    },
    {
      id: 3,
      name: "Планшет Apple iPad Air 2022 256 GB Wi-Fi Blue",
      imageUrl: "/Ipad.png",
      price: 84990,
      discount: 15,
      rating: 4.8,
      isFavorite: false,
      count: 0
    },
    {
      id: 4,
      name: "Фотоаппарат Canon PowerShot G7 X Mark II",
      imageUrl: "/Iphone.png",
      price: 122990,
      discount: 32,
      rating: 3.2,
      isFavorite: true,
      count: 0
    },
  ];

  const [cartProducts, setCartProducts] = useState<CartType>([])

  return (
    <div className="flex flex-col gap-3">
      <ProductCatalog products={products} setCartProducts={setCartProducts} cartProducts={cartProducts}/>
      <Cart cartProps={cartProducts} setCartProducts={setCartProducts}/>
    </div>
  );
}

export default App;
