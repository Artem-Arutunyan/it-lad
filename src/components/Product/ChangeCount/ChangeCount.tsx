import { Dispatch, FC, SetStateAction } from 'react'
import { CartType } from '../../types/cart';
import { IProducts } from '../../types/product';

interface ChangeCountProps {
    count: number | undefined;
    color?: "red" | "green" | "blue";
    setCartProducts: Dispatch<SetStateAction<CartType>>;
    item: IProducts;
    cartProducts: CartType;
}

const ChangeCount:FC<ChangeCountProps> = ({count, setCartProducts, color='red', item, cartProducts}) => {

  //Увеличение количества count
  const handleUp = ()=>{
    //item.count=item.count + 1
    cartProducts.map((el) => {
      if (item.id == el.id) {
        el.count = el.count + 1;
      }
    });
    setCartProducts([...cartProducts]);
  }

  //Уменьшение количества count
  const handleDown = ()=>{
    //item.count=item.count - 1
    cartProducts.map((el) => {
      if (item.id == el.id) {
        el.count = el.count - 1;
      }
    });
    setCartProducts([...cartProducts]);
  }
  
  
  //prettier-ignore
  return (
          <>
              <div className='bg-white flex items-center'>
                  <button className={`bg-${color}-500 text-white uppercase px-3 py-2 rounded-lg`} 
                          onClick={()=>handleDown()}
                  >-</button>
                  
                  <div className='max-w-12 truncate'><span className='font-semibold mx-2'>{count}</span></div>
                  
                  <button className={`bg-${color}-500 text-white uppercase px-3 py-2 rounded-lg`} 
                          onClick={()=>handleUp()}
                  >+</button>
              </div>

              {/* <button className={`bg-${color}-500 text-white uppercase px-2 py-1 rounded-lg`} 
                      onClick={()=>{()=>handleUp()}}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0,0,256,256" width="20px" height="20px">
                  <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                    <g transform="scale(5.33333,5.33333)">
                      <path d="M24,4c-3.29586,0 -6,2.70413 -6,6h-6.25391c-0.08901,-0.01526 -0.17922,-0.02245 -0.26953,-0.02148c-0.07269,0.0019 -0.14515,0.00908 -0.2168,0.02148h-3.75977c-0.54095,-0.00765 -1.04412,0.27656 -1.31683,0.74381c-0.27271,0.46725 -0.27271,1.04514 0,1.51238c0.27271,0.46725 0.77588,0.75146 1.31683,0.74381h2.5v25.5c0,3.01977 2.48023,5.5 5.5,5.5h17c3.01977,0 5.5,-2.48023 5.5,-5.5v-25.5h2.5c0.54095,0.00765 1.04412,-0.27656 1.31683,-0.74381c0.27271,-0.46725 0.27271,-1.04514 0,-1.51238c-0.27271,-0.46725 -0.77588,-0.75146 -1.31683,-0.74381h-3.75391c-0.16103,-0.02645 -0.3253,-0.02645 -0.48633,0h-6.25977c0,-3.29587 -2.70414,-6 -6,-6zM24,7c1.67413,0 3,1.32587 3,3h-6c0,-1.67413 1.32587,-3 3,-3zM13,13h22v25.5c0,1.39823 -1.10177,2.5 -2.5,2.5h-17c-1.39823,0 -2.5,-1.10177 -2.5,-2.5zM20.47656,17.97852c-0.82766,0.01293 -1.48843,0.69381 -1.47656,1.52148v15c-0.00765,0.54095 0.27656,1.04412 0.74381,1.31683c0.46725,0.27271 1.04514,0.27271 1.51238,0c0.46725,-0.27271 0.75146,-0.77588 0.74381,-1.31683v-15c0.00582,-0.40562 -0.15288,-0.7963 -0.43991,-1.08296c-0.28703,-0.28666 -0.67792,-0.44486 -1.08353,-0.43852zM27.47656,17.97852c-0.82766,0.01293 -1.48843,0.69381 -1.47656,1.52148v15c-0.00765,0.54095 0.27656,1.04412 0.74381,1.31683c0.46725,0.27271 1.04514,0.27271 1.51238,0c0.46725,-0.27271 0.75146,-0.77588 0.74381,-1.31683v-15c0.00582,-0.40562 -0.15288,-0.7963 -0.43991,-1.08296c-0.28703,-0.28666 -0.67792,-0.44486 -1.08353,-0.43852z"></path>
                    </g>
                  </g>
                </svg>
              </button> */}
          </>
  )
}

export default ChangeCount