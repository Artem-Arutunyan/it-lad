import classes from "./Product.module.scss";
import { IProducts } from "../types/product";
import { FC } from "react";
import MyButton from "../MyButton/MyButton";

interface ProductProps {
  item: IProducts;
}

const Product: FC<ProductProps> = ({ item }) => {
  const handleBuy = () => {
    alert(`Товар ${item.name} добавлен в корзину`);
  };

  //prettier-ignore
  return (
    <section className={classes.product}>
    
        {/* Секция с фото */}
        <div className={classes.product__photo}>
            <div className={classes.photo_container}>
            {/* Фото товара*/}
            <div className={classes.photo_main}>
                <img src={item.imageUrl}  alt="Не удалось загрузить"/>
            </div>
            {/* Фото товара*/}
            </div>
        </div>
        {/* Секция с фото */}

        {/* Секция с информацией */}
        <div className={classes.product__info}>
            
            <div className={classes.like}>
              <img  src={item.isFavorite ? "/like.png" : "/unlike.png"} alt="like" />
            </div>
            
            <div className={classes.title}>
              <h1>{item.name}</h1>
            </div>

            <div className={classes.price}>
              RU <span>{item.price}</span>
            </div>

            <div className={classes.description}>
              <h3>Информация</h3>
              <ul>
                  <li>Рейтинг <span>{item.rating}</span></li>
                  <li>Скидка <span>{item.discount}%</span></li>
              </ul>
            </div>

            <MyButton onClick={handleBuy} color='red'>В КОРЗИНУ</MyButton>
        </div>
        {/* Секция с информацией */}

    </section>

    )
};

export default Product;
