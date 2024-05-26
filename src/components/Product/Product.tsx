import { IProducts } from '../types/product';
import { Dispatch, FC, SetStateAction } from 'react';
import MyButton from '../MyButton/MyButton';
import ChangeCount from './ChangeCount/ChangeCount';
import { CartType } from '../types/cart';

interface ProductProps {
  item: IProducts;
  cartProducts: CartType;
  setCartProducts: Dispatch<SetStateAction<CartType>>;
}

const Product: FC<ProductProps> = ({ item, setCartProducts, cartProducts }) => {


  const handleBuy = () => {


    if (!cartProducts.length ) {
        item.count = item.count+1
        setCartProducts([{...item}]);}
    
    else{
        if(cartProducts.find((el)=>el.id == item.id)){

            cartProducts.map((el) => {
              if (item.id == el.id) {
                el.count = el.count + 1;
              }
            });
            setCartProducts([...cartProducts]);

        } else {
            item.count = item.count+1
            setCartProducts([...cartProducts, {...item}]);
        }
    }
   

console.log(cartProducts);



  };



  //prettier-ignore
  return (

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            
            {/* Значок лайка */}
            <div className="flex justify-end mr-2 mt-2">
                {item.isFavorite ? 
                    <img width={30} src="/like.png" alt="Изображение не загружено" />
                    :<img width={30} src="/unlike.png" alt="Изображение не загружено" />
                }
            </div>
            {/* Значок лайка */}
            
            {/* Фото товара */}
            <img className="object-scale-down bg-center h-56 p-4 w-full" src={item.imageUrl} alt="Изображение не загружено" />
            {/* Фото товара */}

            {/* Название и цена */}
            <div className="p-4">
                <p className="uppercase tracking-wide text-base font-bold text-gray-700 truncate">{item.name}</p>
                <p className="text-3xl text-red-500">RU {item.price}</p>
            </div>
            {/* Название и цена */}
            
            {/* Рейтинг и скидка */}
            <div className="flex p-4 border-t border-gray-300 text-gray-700">
                
                <div className="flex-1 inline-flex items-center">
                    <img width={25} src="/rating.ico" alt="Рейтинг" />
                    <p><span className="text-gray-900 font-bold ml-2">{item.rating}</span> Рейтинг</p>
                </div>

                <div className="inline-flex items-center">
                    <img width={30} src="/discount.ico" alt="Скидка" />
                    <p><span className="text-gray-900 font-bold ml-2">{item.discount}%</span> Скидка</p>
                </div>

            </div>
            {/* Рейтинг и скидка */}

            {/* Купить */}
            <div className="flex gap-3 px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
               <MyButton onClick={handleBuy} color="red">Купить</MyButton>
               {Boolean(cartProducts.find((el)=>el.id == item.id)?.count) && 
               <ChangeCount count={cartProducts.find((el)=>el.id == item.id)?.count} 
                            setCartProducts={setCartProducts} 
                            item={item} 
                            cartProducts={cartProducts}/>}
            </div>
            {/* Купить */}
  
        </div>        

    )
};

export default Product;
