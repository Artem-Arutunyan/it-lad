import classes from './Products.module.scss';

interface ProductType {
        id: number; 
        name: string;
        imageUrl: string;
        price: number;
        discount: number;
        rating: number;
        isFavorite: boolean;
};


function Products() {

    const product: ProductType = {
        id: 1, 
        name: 'Наручные часы мужские SKMEI 1251',
        imageUrl: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg',
        price: 8165,
        discount: 90,
        rating: 4.7,
        isFavorite: false
    };


  return (
   <>
    <ul className={classes.list}>
        <li>Название: <span>{product.name}</span></li>
        <li>Фото: <img className={classes.img} src={product.imageUrl} alt="Изображение отсутствует"/></li>
        <li>Цена: <span>{product.discount} руб.</span></li>
        <li>Рейтинг: <span>{product.rating}</span></li>
        <li>Избранное: {product.isFavorite ?    <svg width="27" height="27px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z" fill="#222222" stroke="#222222" stroke-width="2"/>
                                                </svg>

                                            :   <svg width="27px" height="27px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z" stroke="#222222"/>
                                                </svg>                 
                        }
        </li>                 
    </ul>                         
   </>
  )
}

export default Products;