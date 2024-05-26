import { FC, Dispatch, SetStateAction } from "react";
import { CartType } from "../types/cart";

interface CartProps {
  cartProps: CartType;
  setCartProducts: Dispatch<SetStateAction<CartType>>;
}

const Cart:FC<CartProps> = ({cartProps, setCartProducts}) => {
//console.log(cartProps);

const handleUp = (id:number)=>{
  cartProps.map((el) => {
    if (el.id == id) {
      el.count = el.count + 1;
    }
  });
  setCartProducts([...cartProps]);
}


const handleDown = (id:number)=>{
  cartProps.map((el) => {
    if (el.id == id) {
      el.count = el.count - 1;
    }
  });
  setCartProducts([...cartProps]);
}
    
  //prettier-ignore
  return (
    <>
      <h1 className="text-2xl font-semibold mb-1">Корзина</h1>
      <div className="flex flex-col md:flex-row gap-4">
        {/* Левая часть */}
        <div className="md:w-3/4">
          <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left font-semibold">Имя</th>
                  <th className="text-left font-semibold">Цена</th>
                  <th className="text-left font-semibold">Кол-во</th>
                  <th className="text-left font-semibold">Итого</th>
                </tr>
              </thead>
              
              <tbody>

                {
                  cartProps.map((product)=>{
                    return <tr key={product.id}>
                              <td className="py-4">
                                <div className="flex items-center">
                                  <img className="h-16 w-16 mr-4" src={product.imageUrl} alt="Product image" />
                                  <span className="font-semibold">{product.name}</span>
                                </div>
                              </td>
            
                              <td className="py-4">{product.price}</td>
            
                              {/* Изменение количества товаров */}
                              <td className="py-4">
                                <div className="flex items-center">
                                  <button className="border rounded-md py-2 px-4 mr-2" onClick={()=>handleDown(product.id)}>-</button>
                                  <span className="text-center w-8">{product.count}</span>
                                  <button className="border rounded-md py-2 px-4 ml-2" onClick={()=>handleUp(product.id)}>+</button>
                                </div>
                              </td>
                              {/* Изменение количества товаров */}
            
                              {/* Итого */}
                              <td className="py-4">000</td>
                            </tr>
                  })
                }

              </tbody>

            </table>
          </div>
        </div>
        {/* Левая часть */}

        {/* Правая часть */}
        <div className="md:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Суммарно</h2>

            <hr className="my-2" />

            <div className="flex justify-between mb-2">
              <span className="font-semibold">Итого</span>
              <span className="font-semibold mr-3">$21.98</span>
            </div>
            
          </div>
        </div>
        {/* Правая часть */}
      </div>
    </>
  );
};

export default Cart;
