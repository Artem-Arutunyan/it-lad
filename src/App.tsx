import ProductCatalog from "./components/ProductCatalog/ProductCatalog";



function App() {

  const products = [
    {
      id: 1,
      name: 'Наручные часы мужские SKMEI 1251',
      imageUrl: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg',
      price: 8165,
      discount: 90,
      rating: 4.7,
      isFavorite: true,
    },
    {
      id: 2,
      name: 'Ноутбук Apple Macbook Air M1 256 Гб',
      imageUrl: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/299/557/989/111/723/100061847855b0.jpg',
      price: 94420,
      discount: 5,
      rating: 5.0,
      isFavorite: false,
    },
    {
      id: 3,
      name: 'Планшет Apple iPad Air 2022 256 GB Wi-Fi Blue',
      imageUrl: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-21/082/171/348/616/24/100033352599b0.jpeg',
      price: 84990,
      discount: 15,
      rating: 4.8,
      isFavorite: false,
    },
    {
      id: 4,
      name: 'Фотоаппарат Canon PowerShot G7 X Mark II',
      imageUrl: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/-1/26/52/56/62/66/23/100000009725b0.jpg',
      price: 122990,
      discount: 32,
      rating: 3.2,
      isFavorite: true,
    },

  ];

  return (
    <>
      <ProductCatalog products={products}/>
    </>
  );
}

export default App;
