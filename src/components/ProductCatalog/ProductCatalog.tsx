import classes from "./ProductCatalog.module.scss";
import Product from "../Product/Product";
import { IProducts } from "../types/product";
import { FC } from "react";

interface ProductCatalogProps {
  products: IProducts[];
};

const ProductCatalog: FC<ProductCatalogProps> = ({ products }) => {
  return (
    <div className={classes.product_catalog}>
      {products.map((el) => {
        return <Product key={el.id} item={el} />;
      })}
    </div>
  );
};

export default ProductCatalog;
