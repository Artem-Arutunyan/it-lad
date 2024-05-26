import classes from "./ProductCatalog.module.scss";
import Product from "../Product/Product";
import { IProducts } from "../types/product";
import { Dispatch, FC, SetStateAction } from "react";
import { CartType } from "../types/cart";

interface ProductCatalogProps {
  products: IProducts[];
  cartProducts: CartType;
  setCartProducts: Dispatch<SetStateAction<CartType>>;
};

const ProductCatalog: FC<ProductCatalogProps> = ({ products, setCartProducts, cartProducts }) => {
  
  return (
    <div className={classes.product_catalog}>
      {products.map((el) => {
        return <Product key={el.id} item={el} setCartProducts={setCartProducts} cartProducts={cartProducts}/>;
      })}
    </div>
  );
};

export default ProductCatalog;
